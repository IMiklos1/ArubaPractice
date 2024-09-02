import { Product } from "../../models/entities/product";

export interface IProductRepository{
    createProduct(product: Product): Promise<Product>;
    getAll():Promise<Product[]>;
    findProductById(id: number): Promise<Product | null>;
    updateProduct(id: number, product: Partial<Product>): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}