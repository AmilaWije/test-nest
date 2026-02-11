import { Product } from "@prisma/client";

export class AllProductResponse {
    products: ProductData[];
}

export class ProductData {
    name: string;
    price: number;
    title: string;
}