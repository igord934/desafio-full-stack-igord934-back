import { Request, Response } from "express";
import listUserService from "../../services/users/getProfile.service";

const getProfileController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const user = await listUserService(userId);
  return res.status(200).json(user);
};

export default getProfileController;
