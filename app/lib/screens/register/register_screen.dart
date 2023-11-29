import 'package:flutter/material.dart';
import 'package:smart_hosp/screens/register/components/body.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});
  static String routeName = '/register';

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Body(),
    );
  }
}
