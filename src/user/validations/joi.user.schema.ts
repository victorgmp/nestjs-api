import Joi from '@hapi/joi';

// the format of the rut is validated
export const JoiUserSchema = Joi.object({
  rut: Joi
    .string()
    .length(10)
    .regex(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/)
    .required(),
  firtsName: Joi
    .string()
    .min(2)
    .max(10)
    .required(),
  lastName: Joi
    .string()
    .min(3)
    .max(15)
    .required(),
  phone: Joi
    .string()
    .min(11)
    .max(15)
    .required(),
  sex: Joi
    .string()
    .length(4)
    .required(),
  email: Joi
    .string()
    .email()
    .required(),
  addresses: Joi
    .array().required().items(
      Joi.object().min(1).required(),
    ),
});
