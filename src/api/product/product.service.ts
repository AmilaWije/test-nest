import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';

export interface Iproduct {
    name: string,
    price: number,
    title: string
}

@Injectable()
export class ProductService {
    private products: Iproduct[] = [];

  constructor(private readonly DB: PrismaService) {}

  async getAllProducts() {
    return await this.DB.product.findMany();
  }

  async createProduct(product: Iproduct) {
    const createdProduct = await this.DB.product.create({
        data: product
    });

    return {
        success: true,
        message: 'Product created successfully',
        data: createdProduct
    };
  }
}
