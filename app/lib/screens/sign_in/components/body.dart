import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:smart_hosp/components/default_button.dart';
import 'package:smart_hosp/model/user.dart';
import 'package:smart_hosp/services/user_data_services.dart';
import 'package:smart_hosp/size_config.dart';
import 'package:smart_hosp/widgets/custom_input_decoration.dart';

class Body extends StatefulWidget {
  const Body({super.key});

  @override
  State<Body> createState() => _BodyState();
}

class _BodyState extends State<Body> {
  final _formKey = GlobalKey<FormState>();
  final phoneNumberController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        decoration: const BoxDecoration(
          // image: DecorationImage(
          //   image: AssetImage('assets/images/splash_background.png'),
          //   fit: BoxFit.scaleDown,
          //   alignment: Alignment.bottomCenter,
          //   opacity: 0.6,
          // ),
          gradient: LinearGradient(
            colors: [
              Color.fromRGBO(20, 121, 255, 0.2),
              Color(0xFF1479FF),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              IconButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                icon: const Icon(
                  Icons.chevron_left,
                  size: 30,
                ),
              ),
              const SizedBox(
                height: 16,
              ),
              const Align(
                alignment: Alignment.center,
                child: Text(
                  'Đăng nhập',
                  style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                      color: Color(
                        0xFF001128,
                      )),
                ),
              ),
              SizedBox(height: getProportionateScreenHeight(20)),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: getProportionateScreenWidth(20)),
                child: Column(
                  children: [
                    TextFormField(
                      validator: (value) {
                        if (value == '' || value == null) {
                          return 'Vui lòng nhập số điện thoại';
                        }
                      },
                      decoration: CustomInputDecoration(
                        hintText: 'CCCD/Số điện thoại',
                      ),
                      keyboardType: TextInputType.phone,
                      controller: phoneNumberController,
                    ),
                    SizedBox(height: getProportionateScreenHeight(16)),
                    TextFormField(
                      validator: (value) {
                        if (value == '' || value == null) {
                          return 'Vui lòng nhập mật khẩu';
                        }
                        return null;
                      },
                      controller: passwordController,
                      decoration: CustomInputDecoration(
                        hintText: 'Mật khẩu',
                      ),
                      obscureText: true,
                    ),
                    SizedBox(height: getProportionateScreenHeight(8)),
                    Align(
                      alignment: Alignment.topLeft,
                      child: InkWell(
                        onTap: () {},
                        child: const Text(
                          'Quên mật khẩu?',
                          style: TextStyle(
                            color: Colors.black,
                            fontSize: 12,
                            fontFamily: 'Roboto',
                            fontWeight: FontWeight.w400,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(height: getProportionateScreenHeight(24)),
                    DefaultButton(
                        text: 'Đăng nhập',
                        press: () async {
                          if (_formKey.currentState!.validate()) {
                            UserDataServices().login(phoneNumberController.text, passwordController.text);
                          }
                        }),
                    SizedBox(height: getProportionateScreenHeight(24)),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
