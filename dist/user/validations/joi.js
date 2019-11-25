"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.JoiUserSchema = joi_1.default.object({
    rut: joi_1.default
        .string()
        .length(10)
        .required(),
    firtsName: joi_1.default
        .string()
        .min(2)
        .max(10)
        .required(),
    lastName: joi_1.default
        .string()
        .min(3)
        .max(15)
        .required(),
    phone: joi_1.default
        .string()
        .min(11)
        .max(15)
        .required(),
    sex: joi_1.default
        .string()
        .length(4)
        .required(),
    email: joi_1.default
        .string()
        .email()
        .required(),
    addresses: joi_1.default
        .optional(),
});
//# sourceMappingURL=joi.js.map