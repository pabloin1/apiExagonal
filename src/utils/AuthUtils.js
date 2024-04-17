"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUtils = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthUtils {
    static generateAccessToken(userId) {
        // Firmar el token JWT con
        return jsonwebtoken_1.default.sign({ userId }, "your_secret_key", { expiresIn: "365d" });
    }
    static comparePasswords(plainPassword, hashedPassword) {
        return bcrypt_1.default.compare(plainPassword, hashedPassword);
    }
}
exports.AuthUtils = AuthUtils;
