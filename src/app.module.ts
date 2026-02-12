import { Module } from '@nestjs/common';
import { ProductModule } from './api/product/product.module';
import { PrismaModule } from './config/prisma/prisma.module';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [ProductModule, PrismaModule, UserModule]
})
export class AppModule {}
