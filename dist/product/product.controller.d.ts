import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { IProduct } from './interfaces/product.interface';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createPost(res: any, createProductDTO: CreateProductDTO): Promise<any>;
    getProducts(res: any): Promise<IProduct[]>;
    getProduct(res: any, productId: any): Promise<any>;
    deleteProduct(res: any, productId: any): Promise<any>;
    updateProduct(res: any, createProductDTO: CreateProductDTO, productId: any): Promise<any>;
}
