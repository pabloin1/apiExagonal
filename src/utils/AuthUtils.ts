import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthUtils {
  static generateAccessToken(userId: string): string {

    // Firmar el token JWT con
    return jwt.sign({ userId}, "your_secret_key", { expiresIn: "365d" });
  }

  static comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
