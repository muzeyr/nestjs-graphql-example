import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  async findAll(): Promise<Product[]> {
    const product = new Product();
    product.id = 1;
    product.name = 'Shirt';
    product.price = 9.99;
    return [product];
  }
}
