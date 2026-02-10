import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all-products')
  allProducts() {
    return this.productService.getAllProducts();
  }
}
