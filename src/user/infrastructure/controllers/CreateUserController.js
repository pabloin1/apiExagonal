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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            // Verificar si los campos opcionales están presentes
            const idHabitat = data.idHabitat !== undefined ? data.idHabitat : null;
            const idReport = data.idReport !== undefined ? data.idReport : null;
            try {
                const user = yield this.createUserUseCase.run(data.username, data.email, data.password, idHabitat, idReport);
                if (user) {
                    res.status(201).json({
                        status: "success",
                        data: user
                    });
                }
                else {
                    res.status(400).json({
                        status: "error",
                        message: "No se pudo crear el usuario"
                    });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    status: "error",
                    message: "Ocurrió un error interno"
                });
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
