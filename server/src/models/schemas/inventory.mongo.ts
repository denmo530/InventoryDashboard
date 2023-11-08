import { Schema, model } from "mongoose";

interface IInventory {
  inventoryId: number;
  city: string;
}

const inventorySchema = new Schema({
  inventoryId: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Inventory = model<IInventory>("Inventory", inventorySchema);

export { Inventory, IInventory };
