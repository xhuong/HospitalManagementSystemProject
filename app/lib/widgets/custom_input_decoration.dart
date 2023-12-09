import 'package:flutter/material.dart';
import 'package:smart_hosp/core/utils/dimension_constants.dart';

class CustomInputDecoration extends InputDecoration {
  CustomInputDecoration({
    String? labelText,
    String? hintText,
    Icon? prefixIcon,
    Widget? suffixIcon,
    bool enabled = true,
    bool filled = true,
    Color? fillColor,
  }) : super(
          constraints: const BoxConstraints(maxHeight: 70, minHeight: 47),
          labelText: labelText,
          hintText: hintText,
          prefixIcon: prefixIcon,
          suffixIcon: suffixIcon,
          filled: filled,
          fillColor: Colors.white,
          enabled: enabled,
          contentPadding: EdgeInsets.all(16),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16),
          ),
// Customize the properties below according to your needs
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16),
            borderSide: BorderSide(color: Color(0xFF1479FF), width: 1.5),
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16),
            borderSide: BorderSide(color: Colors.white, width: 1.0),
          ),
          errorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16),
            borderSide: BorderSide(color: Colors.red, width: 1.0),
          ),
          focusedErrorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(16),
            borderSide: BorderSide(color: Colors.red, width: 1.5),
          ),
// labelStyle: const TextStyle(color: Colors.green),
// hintStyle: const TextStyle(color: Colors.grey),
        );
}
