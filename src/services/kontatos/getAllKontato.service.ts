import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { iKontatoResponse } from "../../interfaces/kontatos.interfaces";
import { listKontatoResponseSerializer } from "../../serializers/kontatos.serializers";

const getAllKontatosService = async (
  userId: string
): Promise<iKontatoResponse[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const kontatosByUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      kontatos: true,
    },
  });

  const returnedData = await listKontatoResponseSerializer.validate(
    kontatosByUser?.kontatos,
    {
      stripUnknown: true,
    }
  );

  return returnedData!;
};

export default getAllKontatosService;
