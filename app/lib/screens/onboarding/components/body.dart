import 'package:flutter/material.dart';
import 'package:smart_hosp/components/default_button.dart';
import 'package:smart_hosp/components/default_button_white.dart';
import 'package:smart_hosp/constants.dart';
import 'package:smart_hosp/routes.dart';
import 'package:smart_hosp/screens/sign_in/sign_in_screen.dart';
import 'package:smart_hosp/screens/onboarding/components/onboarding_content.dart';
import 'package:smart_hosp/screens/onboarding/components/onboarding_item.dart';
import 'package:smart_hosp/size_config.dart';

class Body extends StatefulWidget {
  const Body({super.key});

  @override
  State<Body> createState() => _BodyState();
}

class _BodyState extends State<Body> {
  int currentPage = 0;
  List<OnboardingItem> splashData = [
    OnboardingItem(
      title: "Đặt lịch dễ dàng",
      text: "Chỉ cần dành ra 3 phút để có ngay một cuộc hẹn khám \nvới đội ngũ bác sĩ giỏi đến từ Bệnh viện gia đình.",
      image: "assets/images/splash_1.png",
    ),
    OnboardingItem(
      title: "Theo dõi sức khỏe",
      text: "Cho phép người dùng quản lý sức khỏe một \ncách thường xuyên, góp phần phòng ngừa bệnh tật.",
      image: "assets/images/splash_2.png",
    ),
    OnboardingItem(
      title: "Tin tức y tế",
      text: "Mọi tin tức trong và ngoài nước về lĩnh vực y tế được cập \nnhật một cách sớm nhất.",
      image: "assets/images/splash_3.png",
    ),
  ];
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SizedBox(
        width: double.infinity,
        child: Column(
          children: [
            const SizedBox(
              height: 80,
            ),
            Expanded(
                flex: 3,
                child: PageView.builder(
                  onPageChanged: (value) {
                    setState(() {
                      currentPage = value;
                    });
                  },
                  itemCount: splashData.length,
                  itemBuilder: (context, index) => OnboardingContent(
                    title: splashData[index].title.toString(),
                    image: splashData[index].image.toString(),
                    text: splashData[index].text.toString(),
                  ),
                )),
            Expanded(
                flex: 2,
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: getProportionateScreenWidth(20)),
                  child: Column(
                    children: [
                      Spacer(),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: List.generate(splashData.length, (index) => buildDot(index: index)),
                      ),
                      const Spacer(
                        flex: 3,
                      ),
                      DefaultButton(
                        text: 'Tạo tài khoản',
                        press: () {
                          Navigator.pushNamed(context, SignInScreen.routeName);
                        },
                      ),
                      const SizedBox(height: 8),
                      DefaultButtonWhite(
                        text: 'Đăng nhập',
                        press: () {
                          Navigator.pushNamed(context, SignInScreen.routeName);
                        },
                      ),
                      const Spacer()
                    ],
                  ),
                ))
          ],
        ),
      ),
    );
  }

  @override
  AnimatedContainer buildDot({required int index}) {
    return AnimatedContainer(
      duration: kAnimationDuration,
      margin: EdgeInsets.only(right: 5),
      height: 6,
      width: currentPage == index ? 20 : 6,
      decoration: BoxDecoration(
          color: currentPage == index ? kPrimaryColor : Color(0xFFD8D8D8), borderRadius: BorderRadius.circular(3)),
    );
  }
}
