import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthUtils {
  static generateAccessToken(userId: string): string {
    // Encriptar el ID usando bcrypt
    const encryptedUserId = bcrypt.hashSync(userId, 10);

    // Firmar el token JWT con el ID encriptado como payload
    return jwt.sign({ userId: encryptedUserId }, "your_secret_key", { expiresIn: "365d" });
  }

  static comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
