import { Router } from "express";
import {
  httpUpdateInventoryBalance,
  httpGetAllInventoryBalances,
  httpGetProductInventoryBalance,
  httpGetLocationInventoryBalance,
} from "./inventoryBalances.controller";

const inventoryBalancesRouter = Router();

inventoryBalancesRouter.get("/", httpGetAllInventoryBalances);
inventoryBalancesRouter.get(
  "/product/:product",
  httpGetProductInventoryBalance
);
inventoryBalancesRouter.get(
  "/location/:location",
  httpGetLocationInventoryBalance
);

inventoryBalancesRouter.post("/", httpUpdateInventoryBalance);

export default inventoryBalancesRouter;
