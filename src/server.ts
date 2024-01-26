import express from "express";
import { Signale } from "signale";

import { productRouter } from "./product/infrastructure/ProductRouter";
import { userRouter } from "./user/infrastructure/UserRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter)


app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
