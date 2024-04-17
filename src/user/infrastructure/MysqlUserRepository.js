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
exports.MysqlUserRepository = void 0;
const mysql_1 = require("../../database/mysql");
const User_1 = require("../domain/User");
class MysqlUserRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataUser = Object.values(JSON.parse(JSON.stringify(data)));
                return dataUser.map((user) => new User_1.User(user.id, user.username, user.email, user.password, user.idHabitat, user.idReport));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE id=?";
            const params = [userId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new User_1.User(result[0].id, result[0].username, result[0].email, result[0].password, result[0].idHabitat, result[0].idReport);
            }
            catch (error) {
                return null;
            }
        });
    }
    createUser(username, email, password, idHabitat, idReport) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO users (username, email, password, idHabitat, idReport) VALUES (?, ?, ?,?,?)";
            const params = [username, email, password, idHabitat, idReport];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new User_1.User(result.insertId, username, email, password, idHabitat, idReport);
            }
            catch (error) {
                return null;
            }
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM users WHERE id=?";
            const params = [userId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new User_1.User(userId, result.email, result.password, result.username, result.idHabitat, result.idReport);
            }
            catch (error) {
                return null;
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE email=?";
            const params = [email];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.length === 0) {
                    return null;
                }
                const userData = result[0];
                return new User_1.User(userData.id, userData.username, userData.email, userData.password, userData.idHabitat, userData.idReport);
            }
            catch (error) {
                console.error("Erro al buscar por email:", error);
                return null;
            }
        });
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
