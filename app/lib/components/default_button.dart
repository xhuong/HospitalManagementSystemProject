import 'package:flutter/material.dart';
import 'package:smart_hosp/constants.dart';
import 'package:smart_hosp/size_config.dart';

class DefaultButton extends StatelessWidget {
  const DefaultButton({
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
              backgroundColor: kPrimaryColor, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
          onPressed: press as void Function()?,
          child: Text(
            text,
            style: TextStyle(color: Colors.white, fontSize: getProportionateScreenWidth(18)),
          )),
    );
  }
}
