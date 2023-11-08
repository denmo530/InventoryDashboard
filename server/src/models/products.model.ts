import { Product, IProduct } from "./schemas/products.mongo";

async function getAllProducts() {
  return await Product.find({}, { _id: 0, __v: 0 });
}

async function addProduct(product: IProduct) {
  try {
    await Product.updateOne(
      { name: product.name },
      {
        name: product.name,
        productId: product.productId,
        price: product.price,
      },
      { upsert: true }
    );
  } catch (error) {
    console.error(`Could not add product: ${error}`);
  }
}

export { getAllProducts, addProduct };
