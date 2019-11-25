import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import Joi from '@hapi/joi';

import { IUser } from './interfaces/user.interface';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Joi.ObjectSchema<any>) { }

  transform(value: IUser, metadata: ArgumentMetadata) {
    // console.log(value);
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(error.message);
    }
    return value;
  }
}