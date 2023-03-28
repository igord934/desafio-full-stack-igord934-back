import { Request, Response } from "express";
import { iUserLogin } from "../../interfaces/users.intefaces";
import loginService from "../../services/login/login.services";

const createloginController = async (req: Request, res: Response) => {
  const sessionData: iUserLogin = req.body;
  const token = await loginService(sessionData);
  return res.json({ token });
};

export default createloginController;
