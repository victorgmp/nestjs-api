"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    rut: { type: String, required: true, unique: true },
    firtsName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    sex: { type: String, required: true },
    email: { type: String, required: true },
    addresses: [
        {
            address: { type: String, required: true },
        },
        { default: [] },
    ],
}, {
    timestamps: true,
});
//# sourceMappingURL=user.schema.js.map