import { Request, Response } from "express";
import getAllKontatosService from "../../services/kontatos/getAllKontato.service";

const getAllKontatosController = async (req: Request, res: Response) => {
  const listKontatos = await getAllKontatosService(req.user.id);

  return res.status(200).json(listKontatos);
};

export default getAllKontatosController;
