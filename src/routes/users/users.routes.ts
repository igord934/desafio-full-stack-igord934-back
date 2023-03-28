import { Router } from "express";
import { createUserController } from "../../controllers/users/createUsers.controllers";
import deleteUserController from "../../controllers/users/deleteUsers.controllers";
import getProfileController from "../../controllers/users/getProfile.controller";
import updateUserController from "../../controllers/users/updateUsers.controllers";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware";
import {
  createUserSerializer,
  userPatchRequestSerializer,
} from "../../serializers/users.serializers";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSerializer),
  createUserController
);
userRoutes.get("/profile", ensureAuthMiddleware, getProfileController);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);
userRoutes.patch(
  "",
  ensureDataIsValidMiddleware(userPatchRequestSerializer),
  ensureAuthMiddleware,
  updateUserController
);

export default userRoutes;
