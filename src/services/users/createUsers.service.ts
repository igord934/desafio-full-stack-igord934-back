import { ILike } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { iUserRequest, iUserResponse } from "../../interfaces/users.intefaces";
import { userResponseSerializer } from "../../serializers/users.serializers";

const createUserService = async (
  usersData: iUserRequest
): Promise<iUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const userExist = await userRepository.findOne({
    where: { email: ILike(`${usersData.email}`) },
  });

  if (userExist) {
    throw new AppError("Already exists", 409);
  }

  const createdUser = userRepository.create(usersData);

  await userRepository.save(createdUser);

  const returnedData = await userResponseSerializer.validate(createdUser, {
    stripUnknown: true,
  });

  return returnedData;
};

export default createUserService;
