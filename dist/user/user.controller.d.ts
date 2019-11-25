import { CreateUserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createPost(res: any, createUserDTO: CreateUserDTO): Promise<any>;
    getUserByQuery(res: any, query: CreateUserDTO): Promise<any>;
    getUser(res: any, userId: any): Promise<IUser>;
    deleteUser(res: any, userId: any): Promise<IUser>;
    updateUser(res: any, createUserDTO: CreateUserDTO, userId: any): Promise<IUser>;
}
