import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductData } from './dto/product-response';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  allProducts() {
    return this.productService.getAllProducts();
  }

  @Post('create')
  createProduct(@Body() newProductData: ProductData) {
    return this.productService.createProduct(newProductData);
  }
}
