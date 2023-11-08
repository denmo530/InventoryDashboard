import {
  InventoryBalance,
  IInventoryBalance,
} from "./schemas/inventoryBalances.mongo";

async function getAllInventoryBalances() {
  return await InventoryBalance.find({}, { _id: 0, __v: 0 });
}

async function getProductInventoryBalance(product: string) {
  return await InventoryBalance.find({ product: product }, { _id: 0, __v: 0 });
}

async function getInventoryBalanceLocation(location: string) {
  return await InventoryBalance.find(
    { inventoryLocation: location },
    { _id: 0, __v: 0 }
  );
}

async function updateInventoryBalance(inventoryBalance: IInventoryBalance) {
  try {
    const existingInventoryBalance = await InventoryBalance.findOne({
      product: inventoryBalance.product,
      inventoryLocation: inventoryBalance.inventoryLocation,
    });

    if (existingInventoryBalance) {
      const newQuantity =
        existingInventoryBalance.quantity + inventoryBalance.quantity;

      await InventoryBalance.findOneAndUpdate(
        {
          product: inventoryBalance.product,
          inventoryLocation: inventoryBalance.inventoryLocation,
        },
        { quantity: newQuantity },
        { upsert: true }
      );
    }
  } catch (error) {
    console.error(`Could not update inventory balance: ${error}`);
  }
}

export {
  getAllInventoryBalances,
  updateInventoryBalance,
  getInventoryBalanceLocation,
  getProductInventoryBalance,
};
