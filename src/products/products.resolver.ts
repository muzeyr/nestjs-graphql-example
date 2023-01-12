import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  @Query((returns) => [Product])
  products(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
