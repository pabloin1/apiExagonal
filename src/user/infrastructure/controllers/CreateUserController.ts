import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    // Verificar si los campos opcionales están presentes
    const idHabitat = data.idHabitat !== undefined ? data.idHabitat : null;
    const idReport = data.idReport !== undefined ? data.idReport : null;

    try {
      const user = await this.createUserUseCase.run(
        data.username,
        data.email,
        data.password,
        idHabitat,
        idReport
      );

      if (user) {
        res.status(201).json({
          status: "success",
          data: user
        });
      } else {
        res.status(400).json({
          status: "error",
          message: "No se pudo crear el usuario"
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
