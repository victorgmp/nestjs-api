import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IUser } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel('user') private userModel: Model<IUser>) { }

  // get users from mongoDB
  async getUsers(query: CreateUserDTO): Promise<IUser[]> {
    const users = await this.userModel.find(query);
    return users;
  }

  // get user by Id from mongoDB
  async getUser(userId: string): Promise<IUser> {
    const user = await this.userModel.findById(userId);
    return user;
  }

  // add users in mongoDB
  async createUser(createUserDTO: CreateUserDTO): Promise<IUser> {
    const user = new this.userModel(createUserDTO);
    return await user.save();
  }

  // delete user from mongoDB
  async deleteUser(userId: string): Promise<IUser> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    return deletedUser;
  }

  // update user
  async updateUser(userId: string, createUserDTO: CreateUserDTO): Promise<IUser> {
    const updatedUser = await this.userModel.findByIdAndUpdate(userId, createUserDTO, { new: true });
    return updatedUser;
  }

}
