import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUsers.service";

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const userDeleted = await deleteUserService(userId);
  return res.status(204).json(userDeleted);
};

export default deleteUserController;
