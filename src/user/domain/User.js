"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, email, password, idHabitat, idReport) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.idHabitat = idHabitat;
        this.idReport = idReport;
    }
}
exports.User = User;
