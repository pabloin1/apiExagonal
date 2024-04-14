import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthUtils {
  static generateAccessToken(userId: string): string {
  
    return jwt.sign({ userId }, "your_secret_key", { expiresIn: "1h" });
  }

  static comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}