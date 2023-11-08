import { Request, Response } from "express";
import { addProduct, getAllProducts } from "../../models/products.model";
import { IProduct } from "../../models/schemas/products.mongo";

const httpGetAllProducts = async (req: Request, res: Response) => {
  return res.status(200).json(await getAllProducts());
};

const httpAddProduct = async (req: Request, res: Response) => {
  const product: IProduct = req.body;

  // If any properties are missing return 400 error
  if (!product.productId || !product.name || !product.price) {
    return res.status(400).json({
      error: "Missing required product properties",
    });
  }

  await addProduct(product);

  return res.status(200).json(product);
};

export { httpGetAllProducts, httpAddProduct };
