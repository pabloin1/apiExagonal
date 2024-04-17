"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUseCase = void 0;
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const DeleteUserUseCase_1 = require("./DeleteUserUseCase");
const GetAllUserUseCase_1 = require("./GetAllUserUseCase");
class UsuarioUseCase {
    constructor(userRepository, encryptationService) {
        this.userRepository = userRepository;
        this.encryptationService = encryptationService;
        this.registerUsuarios = new CreateUserUseCase_1.CreateUserUseCase(userRepository, encryptationService);
        this.findUsuarios = new GetAllUserUseCase_1.GetAllUserUseCase(userRepository);
        this.deleteByidUsuario = new DeleteUserUseCase_1.DeleteUserUseCase(userRepository);
    }
}
exports.UsuarioUseCase = UsuarioUseCase;
