class User {
  String? userName;
  String? name;
  String? phoneNumber;
  String? birthday;
  int? gender;
  String? email;
  String? password;
  List<String>? address;

  User(
      {this.userName,
      this.name,
      this.phoneNumber,
      this.birthday,
      this.gender,
      this.email,
      this.password,
      this.address});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      userName: json['user_name'],
      name: json['name'],
      phoneNumber: json['phone_number'],
      birthday: json['birthDay'],
      gender: json['gender'],
      email: json['email'],
      password: json['password'],
      address: json['address'],
    );
  }
}
