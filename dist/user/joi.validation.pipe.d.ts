/// <reference types="hapi__joi" />
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import Joi from '@hapi/joi';
import { IUser } from './interfaces/user.interface';
export declare class JoiValidationPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: Joi.ObjectSchema<any>);
    transform(value: IUser, metadata: ArgumentMetadata): IUser;
}
