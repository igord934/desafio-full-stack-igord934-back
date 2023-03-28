import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import {
  iUserPatchRequest,
  iUserResponse,
} from "../../interfaces/users.intefaces";
import { userResponseSerializer } from "../../serializers/users.serializers";

const patchUserService = async (
  userDataUpdated: iUserPatchRequest,
  userData: iUserResponse
): Promise<iUserResponse> => {
  const userPatch = userDataUpdated;
  if (userPatch.password) {
    userPatch.password = hashSync(userPatch.password, 10);
  }
  const userRepo = AppDataSource.getRepository(User);

  const newUser = userRepo.create({
    ...userData,
    ...userPatch,
  });

  const user = await userRepo.save(newUser);

  const returnedData = await userResponseSerializer.validate(user, {
    stripUnknown: true,
  });

  return returnedData;
};

export default patchUserService;
