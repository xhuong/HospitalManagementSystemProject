import 'package:flutter/material.dart';

const kPrimaryColor = Color(0xFF1479FF);
const kPrimaryLightColor = Color(0xFFFFECDF);
const kPrimaryGradientColor = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color.fromRGBO(20, 121, 255, 0.2), Color(0xFF1479FF)]);
const kSecondaryColor = Color(0xFF979797);
const kTextColor = Color(0xFF001128);

const kAnimationDuration = Duration(milliseconds: 200);

// Form Error
final RegExp emailValidatorRegExp = RegExp(r"^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
const String kEmailNullError = 'Please Enter your email';
const String kInvalidEmailError = 'Please Enter valid email';
const String kPassNullError = 'Please Enter your password';
const String kShortPassError = 'Password is too short';
const String kMatchPassError = "Passwords don't match";
