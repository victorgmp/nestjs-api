import { Model } from 'mongoose';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<IProduct>);
    getProducts(): Promise<IProduct[]>;
    getproduct(productId: string): Promise<IProduct>;
    createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>;
    deleteProduct(productId: string): Promise<IProduct>;
    updateProduct(productId: string, createProductDTO: CreateProductDTO): Promise<IProduct>;
}
