import { Request, Response } from "express";
import {
  updateInventoryBalance,
  getAllInventoryBalances,
  getProductInventoryBalance,
  getInventoryBalanceLocation,
  addNewInventoryBalance,
} from "../../models/inventoryBalances.model";
import {
  IInventoryBalance,
  InventoryBalance,
} from "../../models/schemas/inventoryBalances.mongo";

const httpGetAllInventoryBalances = async (req: Request, res: Response) => {
  return res.status(200).json(await getAllInventoryBalances());
};

const httpGetProductInventoryBalance = async (req: Request, res: Response) => {
  const { product } = req.params;
  return res.status(200).json(await getProductInventoryBalance(product));
};

const httpGetLocationInventoryBalance = async (req: Request, res: Response) => {
  const { location } = req.params;
  return res.status(200).json(await getInventoryBalanceLocation(location));
};

const httpUpdateInventoryBalance = async (req: Request, res: Response) => {
  const inventoryBalance: IInventoryBalance = req.body;

  // If any properties are missing return 400 error
  if (
    !inventoryBalance.inventoryLocation ||
    !inventoryBalance.product ||
    !inventoryBalance.quantity
  ) {
    return res.status(400).json({
      error: "Missing required inventory balance properties",
    });
  }

  await updateInventoryBalance(inventoryBalance);

  return res.status(200).json(inventoryBalance);
};

const httpAddNewInventoryBalance = async (req: Request, res: Response) => {
  const inventoryBalance: IInventoryBalance = req.body;

  // If any properties are missing return 400 error
  if (
    !inventoryBalance.product ||
    !inventoryBalance.inventoryLocation ||
    !inventoryBalance.quantity
  ) {
    return res.status(400).json({
      error: "Missing required inventory balance properties",
    });
  }

  await addNewInventoryBalance(inventoryBalance);

  return res.status(200).json(inventoryBalance);
};
export {
  httpGetAllInventoryBalances,
  httpUpdateInventoryBalance,
  httpGetProductInventoryBalance,
  httpGetLocationInventoryBalance,
  httpAddNewInventoryBalance,
};
