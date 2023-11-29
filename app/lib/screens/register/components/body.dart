import 'package:flutter/material.dart';
import 'package:smart_hosp/size_config.dart';

class Body extends StatefulWidget {
  const Body({super.key});

  @override
  State<Body> createState() => _BodyState();
}

class _BodyState extends State<Body> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: getProportionateScreenWidth(20)),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              IconButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                icon: Icon(Icons.chevron_left),
              ),
              const SizedBox(
                height: 16,
              ),
              const Text(
                'Tạo tài khoản',
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.w600,
                    color: Color(
                      0xFF001128,
                    )),
              )
            ],
          ),
        ),
      ),
    );
  }
}
