import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<IUser>);
    getUsers(query: CreateUserDTO): Promise<IUser[]>;
    getUser(userId: string): Promise<IUser>;
    createUser(createUserDTO: CreateUserDTO): Promise<IUser>;
    deleteUser(userId: string): Promise<IUser>;
    updateUser(userId: string, createUserDTO: CreateUserDTO): Promise<IUser>;
}
