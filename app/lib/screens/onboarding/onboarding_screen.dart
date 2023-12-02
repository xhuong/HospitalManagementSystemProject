import 'package:flutter/material.dart';
import 'package:smart_hosp/screens/onboarding/components/body.dart';
import '../../size_config.dart';

class OnboardingScreen extends StatelessWidget {
  const OnboardingScreen({super.key});
  static String routeName = '/onboard';

  @override
  Widget build(BuildContext context) {
    //You have to call it on your starting screen
    SizeConfig().init(context);
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Body(),
    );
  }
}
