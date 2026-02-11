import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { AllProductResponse, ProductData } from './dto/product-response';

@Injectable()
export class ProductService {

  constructor(private readonly DB: PrismaService) {}

  async getAllProducts():Promise<AllProductResponse> {
    const allProduct =  await this.DB.product.findMany();
    return {
        products: allProduct
    }
  }

  async createProduct(product: ProductData) {
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
