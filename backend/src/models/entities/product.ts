import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Type } from './type';

@Entity({
  name: "product"
})
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  picture_url!: string;

  @Column()
  price_huf!: number;

  @Column()
  short_description!: string;
  
  @OneToMany(() => Type, (type) => type.product)
  types!: Promise<Type[]>;
}
