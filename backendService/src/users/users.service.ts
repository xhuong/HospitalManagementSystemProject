import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Response } from "express";

export type User = {
  userId: number;
  userName: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      userName: "jesse",
      password: "123",
    },
    {
      userId: 2,
      userName: "edwin",
      password: "123",
    },
    {
      userId: 3,
      userName: "bright",
      password: "123",
    },
  ];

  // constructor(@Injectable())

  create(_createUserDto: CreateUserDto) {
    console.log("_createUserDto data:", _createUserDto);
    return "This action adds a new user";
  }

  findAll(response: Response) {
    return response.status(200).json({
      status: 200,
      result: {
        data: "12312",
      },
    });
  }

  async findOne(userName: string) {
    return this.users.find((user) => user.userName === userName);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
