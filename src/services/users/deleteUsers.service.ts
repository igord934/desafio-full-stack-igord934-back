import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId: string): Promise<null> => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.delete({ id: userId });

  return null;
};

export default deleteUserService;
