import { Request, Response } from "express";
import {
  iUserPatchRequest,
  iUserResponse,
} from "../../interfaces/users.intefaces";
import patchUserService from "../../services/users/updateUsers.service";

const updateUserController = async (req: Request, res: Response) => {
  const userDataUpdated: iUserPatchRequest = req.body;
  const userData: iUserResponse = req.user;
  const data = await patchUserService(userDataUpdated, userData);
  return res.status(200).json(data);
};

export default updateUserController;
