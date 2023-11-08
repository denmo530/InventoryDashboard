import { Router } from "express";
import {
  httpAddInventory,
  httpGetAllInventories,
} from "./inventories.controller";

const inventoriesRouter = Router();

inventoriesRouter.get("/", httpGetAllInventories);
inventoriesRouter.post("/", httpAddInventory);

export default inventoriesRouter;
