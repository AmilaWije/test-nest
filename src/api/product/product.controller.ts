import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductData } from './dto/product-response';
import { JwtguardGuard } from 'src/guard/jwtguard/jwtguard.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtguardGuard)
  @Get()
  allProducts() {
    return this.productService.getAllProducts();
  }

  @Post('create')
  createProduct(@Body() newProductData: ProductData) {
    return this.productService.createProduct(newProductData);
  }
}
