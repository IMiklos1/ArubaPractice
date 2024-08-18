// interfaces/IProductService.ts
import { Product } from '../../models/entities/product';

export interface IProductService {
    createProduct(product: Product): Promise<Product>;
    getProductById(id: number): Promise<Product | null>;
    updateProduct(id: number, product: Partial<Product>): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}
