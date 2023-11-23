import 'package:flutter/material.dart';
import 'package:smart_hosp/screens/sign_in/sign_in_screen.dart';
import 'package:smart_hosp/screens/splash/splash_screen.dart';

final Map<String, WidgetBuilder> routes = {
  SplashScreen.routeName: (context) => SplashScreen(),
  SignInScreen.routeName: (context) => SignInScreen(),
};
