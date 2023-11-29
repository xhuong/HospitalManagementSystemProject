import 'package:flutter/material.dart';
import 'package:smart_hosp/screens/register/register_screen.dart';
import 'package:smart_hosp/screens/sign_in/sign_in_screen.dart';
import 'package:smart_hosp/screens/onboarding/onboarding_screen.dart';
import 'package:smart_hosp/screens/splash/splash_screen.dart';

final Map<String, WidgetBuilder> routes = {
  SplashScreen.routeName: (context) => SplashScreen(),
  OnboardingScreen.routeName: (context) => OnboardingScreen(),
  RegisterScreen.routeName: (context) => RegisterScreen(),
  SignInScreen.routeName: (context) => SignInScreen(),
};
