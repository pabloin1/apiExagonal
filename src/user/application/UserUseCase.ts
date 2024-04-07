import { UserRepository } from "../domain/UserRepository";

import { CreateUserUseCase } from "./CreateUserUseCase";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { GetAllUserUseCase } from "./GetAllUserUseCase";
import { EncryptionService } from "./services/cifradoUseCase";

export class UsuarioUseCase {
  public registerUsuarios: CreateUserUseCase;
  public findUsuarios: GetAllUserUseCase;
  public deleteByidUsuario: DeleteUserUseCase;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptationService: EncryptionService
  ) {
    this.registerUsuarios = new CreateUserUseCase(
      userRepository,
      encryptationService
    );
    this.findUsuarios = new GetAllUserUseCase(userRepository);
    this.deleteByidUsuario = new DeleteUserUseCase(userRepository);
  }
}