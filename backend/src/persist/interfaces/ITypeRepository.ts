import { Type } from "../../models/entities/type";

export interface ITypeRepository{
    createType(type: Type): Promise<Type>;
    createIfNewThenGet(type: Type): Promise<Type>;
    findTypeById(id: number): Promise<Type | null>;
    updateType(id: number, type: Partial<Type>): Promise<void>;
    deleteType(id: number): Promise<void>;
}