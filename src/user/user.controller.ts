import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, UsePipes } from '@nestjs/common';

import { CreateUserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';

import { UserService } from './user.service';
import { JoiValidationPipe} from './joi.validation.pipe';
import { JoiUserSchema } from './validations/joi.user.schema';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {

  }

  @Post('/')
  // use pipes for Joi validation
  @UsePipes(new JoiValidationPipe(JoiUserSchema))
  async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO): Promise<any> {
    const user = await this.userService.createUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'user created!!!',
      user,
    });
  }

  @Get('/')
  async getUserByQuery(@Res() res, @Query() query: CreateUserDTO) {
    const users = await this.userService.getUsers(query);
    return res.status(HttpStatus.OK).json({
      users,
    });
  }

  @Get('/:userId')
  async getUser(@Res() res, @Param('userId') userId): Promise<IUser> {
    const user = await this.userService.getUser(userId);
    if (!user) { throw new NotFoundException('user not found!'); }
    return res.status(HttpStatus.OK).json(user);
  }

  @Delete('/:userId')
  async deleteUser(@Res() res, @Param('userId') userId): Promise<IUser> {
    const userDeleted = await this.userService.deleteUser(userId);
    if (!userDeleted) { throw new NotFoundException('user not found!'); }
    return res.status(HttpStatus.OK).json({
      message: 'user deleted!',
      userDeleted,
    });
  }

  @Put('/:userId')
  async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Param('userId') userId): Promise<IUser> {
    const updatedUser = await this.userService.updateUser(userId, createUserDTO);
    if (!updatedUser) { throw new NotFoundException('user not found!'); }
    return res.status(HttpStatus.OK).json({
      message: 'user updated!',
      updatedUser,
    });
  }

}
