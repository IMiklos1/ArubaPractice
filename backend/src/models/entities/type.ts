import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product';

@Entity({
  name: "type"
})
export class Type {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column()
  type_value!: string;

  @Column()
  available_count!: number;

  @ManyToOne(() => Product, (product) => product.types)
  @JoinColumn({ name: 'product_id' }) //this neccesarry because it's not named by productId !!!
  product!: Product;
}
