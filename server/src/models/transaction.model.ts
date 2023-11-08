import { Inventory } from "./schemas/inventory.mongo";
import { Transaction, ITransaction } from "./schemas/transaction.mongo";

async function getAllTransactions() {
  return await Transaction.find({}, { _id: 0, __v: 0 });
}

async function addTransaction(transaction: ITransaction) {
  try {
    // Check if destination for inventory transaction exist
    const inventory = await Inventory.findOne({
      city: transaction.destination,
    });

    if (!inventory) {
      throw new Error("No matching destination for transaction found!");
    }
    await Transaction.create(transaction);
  } catch (error) {
    console.error(`Could not add transaction: ${error}`);
  }
}

export { getAllTransactions, addTransaction };
