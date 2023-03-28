import { Request, Response } from "express";
import { iKontatoRequest } from "../../interfaces/kontatos.interfaces";
import createKontatoService from "../../services/kontatos/createKontatos.service";

const createKontatoController = async (req: Request, res: Response) => {
  const kontato: iKontatoRequest = req.body;
  const createKontato = await createKontatoService(req.user, kontato);
  return res.json(createKontato);
};

export { createKontatoController };
