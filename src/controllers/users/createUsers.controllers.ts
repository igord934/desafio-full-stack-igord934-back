import { Request, Response } from "express";
import { iUserRequest } from "../../interfaces/users.intefaces";
import createUserService from "../../services/users/createUsers.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: iUserRequest = req.body;
    const createUser = await createUserService(user);
    return res.json(createUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
  }
};

export { createUserController };
