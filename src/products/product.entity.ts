import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field(type => Float)
  price: number;
}
