import { Request, Response } from "express";
import { GetByIdUserUseCase } from "../../application/GetByIdUserUseCase";

export class GetByIdUserController {
  constructor(private readonly getByIdUserUseCase: GetByIdUserUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const user = await this.getByIdUserUseCase.run(id);

      if (user) {
        res.status(200).json({
          status: "success",
          data: user
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "El usuario no se encontró"
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
