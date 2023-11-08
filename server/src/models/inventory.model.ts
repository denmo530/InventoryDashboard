import { Inventory, IInventory } from "./schemas/inventory.mongo";

const DEFAULT_INVENTORY_ID = 1;

async function getAllInventories() {
  return await Inventory.find({}, { _id: 0, __v: 0 });
}

async function getLatestInventoryId() {
  // Find latest launch by finding one launch from a descending sorted list of launches
  const latestInventory = await Inventory.findOne().sort("-inventoryId");

  if (!latestInventory) return DEFAULT_INVENTORY_ID;

  return latestInventory?.inventoryId;
}

async function addInventory(inventory: IInventory) {
  try {
    const newInventoryId = Number((await getLatestInventoryId()) + 1);
    await Inventory.updateOne(
      { inventoryId: inventory.inventoryId },
      {
        city: inventory.city,
        inventoryId: newInventoryId,
      },
      { upsert: true }
    );
  } catch (error) {
    console.error(`Could not add inventory: ${error}`);
  }
}

export { getAllInventories, addInventory };
