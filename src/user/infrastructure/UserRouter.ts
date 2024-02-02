import express from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { GetByIdUserController } from "./controllers/GetByIdUserController";
import { createUserUseCase, getAllUseCase, getByIdUserUseCase, deleteUserUseCase } from "./dependencies";
import { DeleteUserController } from "./controllers/DeleteUserController";



export const userRouter = express.Router();

const createUserController = new CreateUserController(createUserUseCase);
const getAllUserController = new GetAllUserController(getAllUseCase);
const getByIdUserController = new GetByIdUserController(getByIdUserUseCase);
const deleteUserController = new DeleteUserController(deleteUserUseCase)

userRouter.get("/", async (req, res) => {
  await getAllUserController.run(req, res);
});

userRouter.get("/:id", async (req, res) => {
  await getByIdUserController.run(req, res);
});

userRouter.post("/", async (req, res) => {
  await createUserController.run(req, res);
});

userRouter.delete("/:id", async (req, res) => {
  await deleteUserController.run(req, res);
});
