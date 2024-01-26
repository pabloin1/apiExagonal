import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase {
  constructor(readonly UserRepository: UserRepository) {}

  async run(
    username: string,
    email: string,
    password: string
  ): Promise<User | null> {
    try {
      const user = await this.UserRepository.createUser(
        username,
        email,
        password
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
