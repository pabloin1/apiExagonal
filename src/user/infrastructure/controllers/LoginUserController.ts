// En tu controlador de inicio de sesión (login)
import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/LoginUserUseCase";

export class LoginUserController {
  constructor(private readonly loginUserUseCase: LoginUserUseCase) {}

  async run(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await this.loginUserUseCase.run(email, password);

      if (token) {
        res.status(200).json({
          status: "success",
          token: token
        });
      } else {
        res.status(401).json({
          status: "error",
          message: "Credenciales inválidas"
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Ocurrió un error interno"
      });
    }
  }
}
