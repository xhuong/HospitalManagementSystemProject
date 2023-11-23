import 'package:flutter/material.dart';
import 'package:smart_hosp/constants.dart';
import 'package:smart_hosp/size_config.dart';

class DefaultButtonWhite extends StatelessWidget {
  const DefaultButtonWhite({
    super.key,
    required this.text,
    required this.press,
  });
  final String text;
  final Function press;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: getProportionateScreenHeight(56),
      child: TextButton(
          style: TextButton.styleFrom(
              side: const BorderSide(color: kPrimaryColor),
              backgroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
          onPressed: press as void Function()?,
          child: Text(
            text,
            style: TextStyle(color: kPrimaryColor, fontSize: getProportionateScreenWidth(18)),
          )),
    );
  }
}
