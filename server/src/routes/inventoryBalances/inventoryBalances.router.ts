import { Router } from "express";
import {
  httpUpdateInventoryBalance,
  httpGetAllInventoryBalances,
  httpGetProductInventoryBalance,
  httpGetLocationInventoryBalance,
  httpAddNewInventoryBalance,
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
inventoryBalancesRouter.post("/new", httpAddNewInventoryBalance);

export default inventoryBalancesRouter;
