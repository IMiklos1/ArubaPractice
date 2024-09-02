import { Repository, EntityRepository, getCustomRepository, DataSource } from 'typeorm';
import { Product } from '../models/entities/product';
import { IProductRepository } from './interfaces/IProductRepository';
import { ITypeRepository } from './interfaces/ITypeRepository';
import { TypeRepository } from './TypeRepository';
import { AppDataSource } from '../context/dataSource';
import { Type } from '../models/entities/type';

export class ProductRepository extends Repository<Product> implements IProductRepository {

    private typeRepository: ITypeRepository;

    constructor(){
        super(Product, AppDataSource.createEntityManager());
        this.typeRepository = new TypeRepository();
    }

    async createProduct(product: Product): Promise<Product> {
        (await product.types).forEach((type: Type) => {
            this.typeRepository.createIfNewThenGet(type);
        });

        return await this.save(product);
    }

    async getAll():Promise<Product[]>{
        const products: Product[] = await this.find({
            relations: ['types'],
            //loadRelationIds: true, // this option only loads the id of the type entites if this removed you get the whole entity
        });
        
        return products;
    } 

    async findProductById(id: number): Promise<Product | null> {
        return await this.findOne({
            relations: ['types'],
            where: {id}
        });
    }

    async updateProduct(id: number, product: Partial<Product>): Promise<void> {
        await this.update(id, product).then(() => {});
    }

    async deleteProduct(id: number): Promise<void> {
        await this.delete(id).then(() => {});
    }
}
