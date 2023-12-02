import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:http/http.dart' as http;

class UserDataServices {
  final _storage = const FlutterSecureStorage();
//login user
  Future<int> login(phoneNubmer, String password) async {
    final body = jsonEncode({
      "phoneNumber": phoneNubmer,
      "password": password,
    });
    const url = "https://hospital-management-backend-service.onrender.com/auth/login";
    final uri = Uri.parse(url);
    final response = await http.post(uri, body: body, headers: {"Content-Type": "application/json"});
    if (response.statusCode == 200) {
      var responseData = json.decode(response.body);
      print("Đăng nhập thành công: $responseData");
    }

    return response.statusCode;
  }
}
