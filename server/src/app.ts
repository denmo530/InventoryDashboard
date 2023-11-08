import express, { Application, Request, Response } from "express";
import cors from "cors";
import path from "path";

import productsRouter from "./routes/products/products.router";
import inventoriesRouter from "./routes/inventories/inventories.router";
import inventoryBalancesRouter from "./routes/inventoryBalances/inventoryBalances.router";

const app: Application = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));

// Express middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

// Router middleware
// app.get("/*", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

app.use("/products", productsRouter);
app.use("/inventories", inventoriesRouter);
app.use("/inventoryBalances", inventoryBalancesRouter);

export default app;
