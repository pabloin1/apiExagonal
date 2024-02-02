import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class DeleteUserUseCase {
  constructor(readonly UserRepository: UserRepository) {}

  async run(
    id:number
  ): Promise<User | null> {
    try {
      const user = await this.UserRepository.deleteUser(
        id
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
