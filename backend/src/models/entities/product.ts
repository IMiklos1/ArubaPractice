import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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
    types: any;
}
