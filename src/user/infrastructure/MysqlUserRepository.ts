import { query } from "../../database/mysql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class MysqlUserRepository implements UserRepository {
  async getAll(): Promise<User[] | null> {
    const sql = "SELECT * FROM user";
    try {
      const [data]: any = await query(sql, []);
      const dataUser = Object.values(JSON.parse(JSON.stringify(data)));

      return dataUser.map(
        (user: any) =>
          new User(user.id, user.username, user.email, user.password)
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<User | null> {
    const sql = "SELECT * FROM user WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(
        result[0].id,
        result[0].username,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      return null;
    }
  }

  async createUser(
    username: string,
    email: string,
    password: string
  ): Promise<User | null> {
    const sql =
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    const params: any[] = [username, email, password];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(result.insertId, username, email, password);
    } catch (error) {
      return null;
    }
  }
}
