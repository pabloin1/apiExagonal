import { Request, Response } from "express";
import { GetAllUserUseCase } from "../../application/GetAllUserUseCase";

export class GetAllUserController {
  constructor(private readonly getAllUserUseCase: GetAllUserUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const users = await this.getAllUserUseCase.run();
      
      res.status(200).json({
        status: "success",
        data: users
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Ocurrió un error interno"
      });
    }
  }
}
