import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { EncryptionService } from "./services/cifradoUseCase";

export class CreateUserUseCase {
  constructor(readonly UserRepository: UserRepository , private readonly encryptionService : EncryptionService) {}

  async run(
    username: string,
    email: string,
    password: string,
    idHabitat: number,
    idReport: number
  ): Promise<User | null> {
    try {
      password = this.encryptionService.Encryption(password)
      const user = await this.UserRepository.createUser(
        username,
        email,
        password,
        idHabitat,
        idReport
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
