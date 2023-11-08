import { Request, Response } from "express";
import {
  addTransaction,
  getAllTransactions,
} from "../../models/transaction.model";
import { ITransaction } from "../../models/schemas/transaction.mongo";
import { httpUpdateInventoryBalance } from "../inventoryBalances/inventoryBalances.controller";
import { updateInventoryBalance } from "../../models/inventoryBalances.model";
import { InventoryBalance } from "../../models/schemas/inventoryBalances.mongo";

const httpGetAllTransactions = async (req: Request, res: Response) => {
  return res.status(200).json(await getAllTransactions());
};

const httpAddTransaction = async (req: Request, res: Response) => {
  const transaction: ITransaction = req.body;

  // If any properties are missing return 400 error
  if (
    !transaction.destination ||
    !transaction.product ||
    !transaction.quantity
  ) {
    return res.status(400).json({
      error: "Missing required transaction properties",
    });
  }

  transaction.createdAt = new Date();

  await addTransaction(transaction);

  const newInventoryBalance = new InventoryBalance({
    product: transaction.product,
    quantity: transaction.quantity,
    inventoryLocation: transaction.destination,
  });

  await updateInventoryBalance(newInventoryBalance);

  //   await httpUpdateInventoryBalance()
  // Måste nog uppdatera update så den tar en transaktion istället.

  return res.status(200).json(transaction);
};

export { httpGetAllTransactions, httpAddTransaction };
