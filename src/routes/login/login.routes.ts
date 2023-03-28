import { Router } from "express";
import createloginController from "../../controllers/login/login.controllers";
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware";
import { loginSerializer } from "../../serializers/login.serializers";

const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginSerializer),
  createloginController
);

export default loginRoutes;
