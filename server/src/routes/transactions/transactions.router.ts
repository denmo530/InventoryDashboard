import { Router } from "express";

import {
  httpGetAllTransactions,
  httpAddTransaction,
} from "./transactions.controller";

const transactionsRouter = Router();

transactionsRouter.get("/", httpGetAllTransactions);
transactionsRouter.post("/", httpAddTransaction);

export default transactionsRouter;
