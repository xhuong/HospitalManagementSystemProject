import 'package:flutter/material.dart';
import 'package:smart_hosp/components/default_button.dart';
import 'package:smart_hosp/size_config.dart';
import 'package:smart_hosp/widgets/custom_input_decoration.dart';

class Body extends StatefulWidget {
  const Body({super.key});

  @override
  State<Body> createState() => _BodyState();
}

class _BodyState extends State<Body> {
  final _formKey = GlobalKey<FormState>();
  final nameController = TextEditingController();
  final phoneNumberController = TextEditingController();
  final passwordController = TextEditingController();
  final confirmPasswordController = TextEditingController();

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
              SizedBox(height: getProportionateScreenHeight(16)),
              const Align(
                alignment: Alignment.center,
                child: Text(
                  'Tạo tài khoản',
                  style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                      color: Color(
                        0xFF001128,
                      )),
                ),
              ),
              SizedBox(height: getProportionateScreenHeight(24)),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: getProportionateScreenWidth(20)),
                child: Column(
                  children: [
                    TextFormField(
                      decoration: CustomInputDecoration(
                        hintText: 'Họ và tên',
                      ),
                      controller: nameController,
                      keyboardType: TextInputType.name,
                      validator: (value) {
                        if (value == '' || value == null) {
                          return 'Please enter your name';
                        } else {
                          return null;
                        }
                      },
                    ),
                    SizedBox(height: getProportionateScreenHeight(16)),
                    TextFormField(
                      decoration: CustomInputDecoration(
                        hintText: 'CCCD',
                      ),
                      keyboardType: TextInputType.phone,
                      controller: phoneNumberController,
                    ),
                    SizedBox(height: getProportionateScreenHeight(16)),
                    TextFormField(
                      decoration: CustomInputDecoration(
                        hintText: 'Mật khẩu',
                      ),
                    ),
                    SizedBox(height: getProportionateScreenHeight(16)),
                    TextFormField(
                      decoration: CustomInputDecoration(
                        hintText: 'Xác nhận mật khẩu',
                      ),
                    ),
                    SizedBox(height: getProportionateScreenHeight(24)),
                    DefaultButton(
                      text: 'Tiếp tục',
                      press: () {},
                    ),
                    SizedBox(height: getProportionateScreenHeight(24)),
                    const Text(
                      'Bằng cách nhấn nút, tôi đồng ý với điều khoản và chính sách của\nSmartHOSP.',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
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
