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
exports.query = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
const signale_1 = require("signale");
dotenv_1.default.config();
const signale = new signale_1.Signale();
const config = {
    host: "database-1.cd8ee2i0wc9v.us-east-1.rds.amazonaws.com",
    user: "admin",
    database: "multidiciplinario",
    password: "admin123",
    waitForConnections: true,
    connectionLimit: 10,
};
// Crear el pool de conexiones
const pool = promise_1.default.createPool(config);
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield pool.getConnection();
            signale.success("Conexión exitosa a la BD");
            const result = yield conn.execute(sql, params);
            conn.release();
            return result;
        }
        catch (error) {
            signale.error(error);
            return null;
        }
    });
}
exports.query = query;
