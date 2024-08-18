import { Repository, EntityRepository, getCustomRepository } from 'typeorm';
import { Product } from '../models/entities/product';
import { IProductRepository } from './interfaces/IProductRepository';
import { ITypeRepository } from './interfaces/ITypeRepository';
import { TypeRepository } from './TypeRepository';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> implements IProductRepository {

    private typeRepository: ITypeRepository= getCustomRepository(TypeRepository);

    async createProduct(product: Product): Promise<Product> {
        
        return await this.save(product);
    }

    async findProductById(id: number): Promise<Product | null> {
        return await this.findOne({where: {id}});
    }

    async updateProduct(id: number, product: Partial<Product>): Promise<void> {
        await this.update(id, product).then(() => {});
    }

    async deleteProduct(id: number): Promise<void> {
        await this.delete(id).then(() => {});
    }
}
