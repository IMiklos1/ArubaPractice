// controllers/ProductController.ts
import { Request, Response } from 'express';
import { IProductService } from '../service/interfaces/IProductService';
import { ProductService } from '../service/ProductService';
import { Product } from '../models/entities/product';

export class ProductController {
    private productService: IProductService;

    constructor() {
        this.productService = new ProductService();
    }

    async createProduct(req: Request, res: Response): Promise<Response> {
        const productData: Product = req.body;
        try {
            const product = await this.productService.createProduct(productData);
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to create product' });
        }
    }

    async getProductById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        try {
            const product = await this.productService.getProductById(id);
            if (product) {
                return res.status(200).json(product);
            } else {
                return res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Failed to retrieve product' });
        }
    }

    async updateProduct(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        const productData: Partial<Product> = req.body;
        try {
            await this.productService.updateProduct(id, productData);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: 'Failed to update product' });
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        try {
            await this.productService.deleteProduct(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: 'Failed to delete product' });
        }
    }
}
