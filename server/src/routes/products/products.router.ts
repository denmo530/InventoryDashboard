import { Router } from "express";
import { httpAddProduct, httpGetAllProducts } from "./products.controller";

const productsRouter = Router();

productsRouter.get("/", httpGetAllProducts);
productsRouter.post("/", httpAddProduct);

export default productsRouter;
