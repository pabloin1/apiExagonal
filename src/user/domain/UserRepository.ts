import { User } from "./User";

export interface UserRepository {
  getAll(): Promise<User[] | null>;
  getById(userId: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>; // Metodo de email ?
  createUser(
    username: string,
    email: string,
    password: string,
    idHabitat:number,
    idReport:number
  ): Promise<User | null>;
  deleteUser(userId: number): Promise<User | null>;
}