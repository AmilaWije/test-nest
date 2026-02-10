import { Module } from '@nestjs/common';
import { ProductModule } from './api/product/product.module';
import { PrismaModule } from './config/prisma/prisma.module';

@Module({
  imports: [ProductModule, PrismaModule]
})
export class AppModule {}
