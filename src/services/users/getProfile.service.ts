import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUserResponse } from "../../interfaces/users.intefaces";
import { userResponseSerializer } from "../../serializers/users.serializers";

const getProfileService = async (userId: string): Promise<iUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({
    where: { id: userId },
    relations: { kontatos: true },
  });

  const userResponse = await userResponseSerializer.validate(user, {
    stripUnknown: true,
  });

  return userResponse;
};

export default getProfileService;
