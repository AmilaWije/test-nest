import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';

export interface Iproduct {
    id: number,
    name: string,
    price: number,
    title: string
}

@Injectable()
export class ProductService {
    private products: Iproduct[] = [];

    constructor(private readonly DB:PrismaService){}

    getAllProducts() {
        // Fetch zero or more Products
        const pro = this.DB.product.findMany();
        return pro;
    }
}
