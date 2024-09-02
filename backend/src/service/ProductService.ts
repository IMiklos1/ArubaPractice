import { DataSource, getCustomRepository } from 'typeorm';
import { IProductService } from './interfaces/IProductService';
import { ProductRepository } from '../persist/ProductRepository';
import { Product } from '../models/entities/product';
import { IProductRepository } from '../persist/interfaces/IProductRepository';

export class ProductService implements IProductService {
    private productRepository: IProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    async createProduct(product: Product): Promise<Product> {
        return this.productRepository.createProduct(product);
    }

    async getAll():Promise<Product[]>{
        return await this.productRepository.getAll();
    }

    async getProductById(id: number): Promise<Product | null> {
        return this.productRepository.findProductById(id);
    }

    async updateProduct(id: number, product: Partial<Product>): Promise<void> {
        await this.productRepository.updateProduct(id, product);
    }

    async deleteProduct(id: number): Promise<void> {
        await this.productRepository.deleteProduct(id);
    }
}
