import express from "express";
import { Signale } from "signale";
const cors = require('cors');

import { userRouter } from "./user/infrastructure/UserRouter";

const app = express();

app.use(cors());
app.disable("x-powered-by");

const signale = new Signale();

app.use(express.json());
app.use("/users", userRouter);

app.listen(3001, () => {
  signale.success(`Server online in port 3001`);
});