import { Request, Response } from "express";
import getOneKontatoService from "../../services/kontatos/getOneKontato.service";

const getAllKontatosController = async (req: Request, res: Response) => {
  const kontato = await getOneKontatoService(req.user.id, req.params.id);

  return res.status(200).json(kontato);
};

export default getAllKontatosController;
