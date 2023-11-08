import { Schema, model } from "mongoose";

interface IInventoryBalance {
  product: string;
  inventoryLocation: string;
  quantity: number;
}

const inventoryBalanceSchema = new Schema({
  product: {
    type: String,
    required: true,
  },
  inventoryLocation: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const InventoryBalance = model<IInventoryBalance>(
  "InventoryBalance",
  inventoryBalanceSchema
);

export { InventoryBalance, IInventoryBalance };
