import { UserRepository } from "../domain/UserRepository"
import { AuthUtils } from "../../utils/AuthUtils";

export class LoginUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return null;
    }

    if (!user.id) {
      console.error("El usuario encontrado no tiene un ID válido");
      return null;
    }
  
    const passwordMatch = await AuthUtils.comparePasswords(password, user.password);

    if (!passwordMatch) {
      return null; 
    }

    const token = AuthUtils.generateAccessToken(user.id.toString());

    return token;
  }
}
