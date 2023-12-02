import 'package:flutter/material.dart';
import 'package:smart_hosp/screens/sign_in/components/body.dart';

class SignInScreen extends StatelessWidget {
  const SignInScreen({super.key});
  static String routeName = '/sign_in';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Body(),
    );
  }
}
