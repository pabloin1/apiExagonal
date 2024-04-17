"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateUserController_1 = require("./controllers/CreateUserController");
const GetAllUserController_1 = require("./controllers/GetAllUserController");
const GetByIdUserController_1 = require("./controllers/GetByIdUserController");
const dependencies_1 = require("./dependencies");
const DeleteUserController_1 = require("./controllers/DeleteUserController");
const cifradoUseCase_1 = require("../application/services/cifradoUseCase");
const encryptionService = new cifradoUseCase_1.EncryptionService();
exports.userRouter = express_1.default.Router();
const createUserController = new CreateUserController_1.CreateUserController(dependencies_1.createUserUseCase);
const getAllUserController = new GetAllUserController_1.GetAllUserController(dependencies_1.getAllUseCase);
const getByIdUserController = new GetByIdUserController_1.GetByIdUserController(dependencies_1.getByIdUserUseCase);
const deleteUserController = new DeleteUserController_1.DeleteUserController(dependencies_1.deleteUserUseCase);
exports.userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield getAllUserController.run(req, res);
}));
exports.userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield getByIdUserController.run(req, res);
}));
exports.userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield createUserController.run(req, res);
}));
exports.userRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield deleteUserController.run(req, res);
}));
exports.userRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield dependencies_1.loginUserController.run(req, res); }));
