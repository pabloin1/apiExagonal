import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetAllUserUseCase } from "../application/GetAllUserUseCase";
import { GetByIdUserUseCase } from "../application/GetByIdUserUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { GetByIdUserController } from "./controllers/GetByIdUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";

export const mysqlUserRepository = new MysqlUserRepository();
export const createUserUseCase = new CreateUserUseCase(
  mysqlUserRepository
);
export const getAllUseCase = new GetAllUserUseCase(mysqlUserRepository);
export const getByIdUserUseCase = new GetByIdUserUseCase(
  mysqlUserRepository
);
export const createUserController = new CreateUserController(
  createUserUseCase
);
export const getAllUserController = new GetAllUserController(getAllUseCase);
export const getByIdUserController = new GetByIdUserController(
  getByIdUserUseCase
);
