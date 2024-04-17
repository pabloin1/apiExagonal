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
exports.LoginUserUseCase = void 0;
const AuthUtils_1 = require("../../utils/AuthUtils");
class LoginUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(email);
            if (!user) {
                return null;
            }
            if (!user.id) {
                console.error("El usuario encontrado no tiene un ID válido");
                return null;
            }
            const passwordMatch = yield AuthUtils_1.AuthUtils.comparePasswords(password, user.password);
            if (!passwordMatch) {
                return null;
            }
            const token = AuthUtils_1.AuthUtils.generateAccessToken(user.id.toString());
            return token;
        });
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
