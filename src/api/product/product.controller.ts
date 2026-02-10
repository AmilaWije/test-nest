import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import type { Iproduct } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  allProducts() {
    return this.productService.getAllProducts();
  }

  @Post('create')
  createProduct(@Body() newProductData: Iproduct) {
    return this.productService.createProduct(newProductData);
  }
}
