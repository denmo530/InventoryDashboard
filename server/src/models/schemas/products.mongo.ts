import { Schema, model } from "mongoose";

interface IProduct {
  productId: string;
  name: string;
  price: number;
}

const productsSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = model<IProduct>("Product", productsSchema);

export { Product, IProduct };
