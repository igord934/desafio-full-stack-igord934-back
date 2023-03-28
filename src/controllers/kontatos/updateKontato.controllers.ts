import { Request, Response } from "express";
import updateKontatoService from "../../services/kontatos/updateKontatos.service";

const updateKontatosController = async (req: Request, res: Response) => {
  const listKontatos = await updateKontatoService(
    req.user.id,
    req.params.id,
    req.body
  );

  return res.status(200).json(listKontatos);
};

export default updateKontatosController;
