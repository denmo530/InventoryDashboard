import { Request, Response } from "express";
import { addInventory, getAllInventories } from "../../models/inventory.model";
import { IInventory } from "../../models/schemas/inventory.mongo";

const httpGetAllInventories = async (req: Request, res: Response) => {
  return res.status(200).json(await getAllInventories());
};

const httpAddInventory = async (req: Request, res: Response) => {
  const inventory: IInventory = req.body;

  // If any properties are missing return 400 error
  if (!inventory.city) {
    return res.status(400).json({
      error: "Missing required inventory properties",
    });
  }

  await addInventory(inventory);

  return res.status(200).json(inventory);
};

export { httpGetAllInventories, httpAddInventory };
