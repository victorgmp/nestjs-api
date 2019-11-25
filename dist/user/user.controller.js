"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const joi_validation_pipe_1 = require("./joi.validation.pipe");
const joi_user_schema_1 = require("./validations/joi.user.schema");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createPost(res, createUserDTO) {
        const user = await this.userService.createUser(createUserDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'user created!!!',
            user,
        });
    }
    async getUserByQuery(res, query) {
        const users = await this.userService.getUsers(query);
        return res.status(common_1.HttpStatus.OK).json({
            users,
        });
    }
    async getUser(res, userId) {
        const user = await this.userService.getUser(userId);
        if (!user) {
            throw new common_1.NotFoundException('user not found!');
        }
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async deleteUser(res, userId) {
        const userDeleted = await this.userService.deleteUser(userId);
        if (!userDeleted) {
            throw new common_1.NotFoundException('user not found!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'user deleted!',
            userDeleted,
        });
    }
    async updateUser(res, createUserDTO, userId) {
        const updatedUser = await this.userService.updateUser(userId, createUserDTO);
        if (!updatedUser) {
            throw new common_1.NotFoundException('user not found!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'user updated!',
            updatedUser,
        });
    }
};
__decorate([
    common_1.Post('/'),
    common_1.UsePipes(new joi_validation_pipe_1.JoiValidationPipe(joi_user_schema_1.JoiUserSchema)),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createPost", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByQuery", null);
__decorate([
    common_1.Get('/:userId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Delete('/:userId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    common_1.Put('/:userId'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.CreateUserDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map