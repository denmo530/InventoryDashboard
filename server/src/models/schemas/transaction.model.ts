import { Schema, model } from "mongoose";

interface ITransaction {
  createdAt: Date;
  product: string;
  destination: string;
  quantity: number;
}

const transactionSchema = new Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Transaction = model<ITransaction>("Transaction", transactionSchema);

export { Transaction, ITransaction };
