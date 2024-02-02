import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/DeleteUserUseCase";

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const users = await this.deleteUserUseCase.run(id);

      res.status(200).json({
        status: "success",
        data: users,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Ocurrió un error interno",
      });
    }
  }
}
