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
          gradient: LinearGradient(
            colors: [
              Color.fromRGBO(20, 121, 255, 0.2),
              Color(0xFF1479FF),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        padding: EdgeInsets.symmetric(horizontal: getProportionateScreenWidth(20)),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  IconButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    icon: const Icon(
                      Icons.chevron_left,
                      size: 24,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 16,
              ),
              const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Đăng nhập',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.w600,
                        color: Color(
                          0xFF001128,
                        )),
                  ),
                ],
              ),
              const SizedBox(
                height: 24,
              ),
              TextFormField(
                decoration: CustomInputDecoration(
                  hintText: 'Số điện thoại',
                ),
                controller: phoneNumberController,
              ),
              const SizedBox(
                height: 16,
              ),
              TextFormField(
                validator: (value) {
                  if (value == '' || value == null) {
                    return 'Please enter your password';
                  }
                  return null;
                },
                controller: passwordController,
                decoration: CustomInputDecoration(
                  hintText: 'Mật khẩu',
                ),
              ),
              const SizedBox(
                height: 24,
              ),
              DefaultButton(
                  text: 'Đăng nhập',
                  press: () async {
                    if (_formKey.currentState!.validate()) {
                      UserDataServices().login(phoneNumberController.text, passwordController.text);
                    }
                    ;
                  }),
              const SizedBox(
                height: 24,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
