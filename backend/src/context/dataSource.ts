import { DataSource } from "typeorm";
import { User } from "../models/entities/user";
import { Product } from "../models/entities/product";
import { Type } from "../models/entities/type";

// Initialize and export a new DataSource
export const AppDataSource = new DataSource({
    type: "postgres",           // Database type (PostgreSQL in this case)
    host: "localhost",          // Hostname of the database
    port: 5432,                 // Port number for the database connection
    username: "practice_user",  // Database username
    password: "practice_userpass",  // Database password
    database: "practice",       // Database name
    synchronize: false,          // Automatically synchronize schema (development only)
    logging: false,             // Disable logging (can be useful during development)
    entities: [User, Product, Type],  // Entities to manage with this connection
    migrations: ['src/migrations/*.ts'],
  });