import 'package:flutter/material.dart';
import 'package:smart_hosp/constants.dart';
import 'package:smart_hosp/size_config.dart';

class OnboardingContent extends StatelessWidget {
  const OnboardingContent({
    super.key,
    required this.title,
    required this.text,
    required this.image,
  });
  final String title, text, image;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Spacer(),
        Image.asset(
          image,
          height: getProportionateScreenHeight(265),
          width: getProportionateScreenWidth(235),
        ),
        const SizedBox(height: 32),
        Text(
          title,
          style: const TextStyle(
            color: kTextColor,
            fontSize: 20,
            fontWeight: FontWeight.w500,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          text,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
