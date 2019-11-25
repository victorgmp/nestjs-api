import { Document } from 'mongoose';
export interface IUser extends Document {
    readonly rut: string;
    readonly firtsName: string;
    readonly lastName: string;
    readonly phone: string;
    readonly sex: string;
    readonly email: string;
    readonly addresses: Array<{
        address: string;
    }>;
}
