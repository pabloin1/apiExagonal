import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";
//import { CreateUserUseCase } from "../../application/CreateUserUseCase";


export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  //Cambiar 

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const user = await this.createUserUseCase.run(
        data.username,
        data.email,
        data.password
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
