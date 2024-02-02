import express from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetAllProductController } from "./controllers/GetAllProductController";
import {GetByIdProductController} from "./controllers/GetByIdProductController";
import { createProductUseCase, getAllUseCase, getByIdProductUseCase } from "./dependencies";

/*import { CreateProductController } from "CreateProductController";
import { GetAllProductController } from "GetAllProductController";
import {GetByIdProductController} from "GetByIdProductController";*/

export const productRouter = express.Router();

const createProductController = new CreateProductController(createProductUseCase);
const getAllProductController = new GetAllProductController(getAllUseCase);
const getByIdProductController = new GetByIdProductController(getByIdProductUseCase);

productRouter.get("/", async (req, res) => {
  await getAllProductController.run(req, res);
});

productRouter.get("/:id", async (req, res) => {
  await getByIdProductController.run(req, res);
});

productRouter.post("/", async (req, res) => {
  await createProductController.run(req, res);
});
