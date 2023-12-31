import 'package:flutter/material.dart';
import 'package:smart_hosp/routes.dart';
import 'package:smart_hosp/screens/onboarding/onboarding_screen.dart';
import 'package:smart_hosp/screens/splash/splash_screen.dart';
import 'package:smart_hosp/theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: theme(),
      initialRoute: SplashScreen.routeName,
      routes: routes,
    );
  }
}
