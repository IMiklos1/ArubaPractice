import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column()
  type_value!: string;

  @Column()
  available_count!: number;

  @ManyToOne(() => Product, product => product.types)
  product!: Product;
}
