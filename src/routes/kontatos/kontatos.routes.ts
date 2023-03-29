import { Router } from "express";
import { createKontatoController } from "../../controllers/kontatos/createKontato.controllers";
import deleteKontatosController from "../../controllers/kontatos/deleteKontato.controllers";
import updateKontatosController from "../../controllers/kontatos/updateKontato.controllers";
import getAllKontatosController from "../../controllers/kontatos/getAllKontato.controllers";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware";
import ensureUUIDIsValidMiddleware from "../../middlewares/ensureUUIDIsValid.middleware";
import {
  createKontatoSerializer,
  updateKontatoSerializer,
} from "../../serializers/kontatos.serializers";

const kontatosRoutes = Router();

kontatosRoutes.post(
  "",
  ensureDataIsValidMiddleware(createKontatoSerializer),
  ensureAuthMiddleware,
  createKontatoController
);

kontatosRoutes.get("", ensureAuthMiddleware, getAllKontatosController);
kontatosRoutes.get("/:id", ensureUUIDIsValidMiddleware, ensureAuthMiddleware);
kontatosRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValidMiddleware,
  deleteKontatosController
);
kontatosRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateKontatoSerializer),
  ensureAuthMiddleware,
  ensureUUIDIsValidMiddleware,
  updateKontatosController
);

export default kontatosRoutes;
