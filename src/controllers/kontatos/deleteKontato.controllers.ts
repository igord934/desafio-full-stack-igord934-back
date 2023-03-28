import { Request, Response } from "express";
import deleteKontatoService from "../../services/kontatos/deleteKontato.service";

const getAllKontatosController = async (req: Request, res: Response) => {
  await deleteKontatoService(req.user.id, req.params.id);

  return res.status(204);
};

export default getAllKontatosController;
