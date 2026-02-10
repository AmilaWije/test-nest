import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly DB: PrismaService) {}

  async getAllProducts() {
    return await this.DB.product.findMany();
  }
}
