"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class EncryptionService {
    Encryption(password) {
        const encryptionPassword = bcrypt_1.default.hashSync(password, 10);
        return encryptionPassword;
    }
}
exports.EncryptionService = EncryptionService;
