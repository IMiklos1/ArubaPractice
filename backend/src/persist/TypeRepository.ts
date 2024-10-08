import { Repository, EntityRepository, DataSource } from 'typeorm';
import { Type } from '../models/entities/type';
import { ITypeRepository } from './interfaces/ITypeRepository';
import { AppDataSource } from '../context/dataSource';
import { Product } from '../models/entities/product';

export class TypeRepository extends Repository<Type> implements ITypeRepository {
    constructor()
    {
        super(Type, AppDataSource.createEntityManager());
    }
    
    async createType(type: Type): Promise<Type> {
        return await this.save(type);
    }

    async createIfNewThenGet(type: Type): Promise<Type> {
        const foundType = await this.findOneBy({
            type: type.type,
            type_value: type.type_value,
            available_count: type.available_count
        });

        if (foundType) {
            return foundType;
        }
        else {
            return this.createType(type);
        }
    }

    async findTypeById(id: number): Promise<Type | null> {
        return await this.findOneBy({ id: id });
    }

    async updateType(id: number, type: Partial<Type>): Promise<void> {
        await this.update(id, type);
    }

    async deleteType(id: number): Promise<void> {
        await this.delete(id);
    }
}
