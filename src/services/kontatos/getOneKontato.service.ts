import AppDataSource from "../../data-source";
import { Kontato } from "../../entities/kontato.entity";
import { AppError } from "../../errors";
import { iKontatoResponse } from "../../interfaces/kontatos.interfaces";

const getOneKontatoService = async (
  userId: string,
  kontatoId: string
): Promise<iKontatoResponse> => {
  const kontatoRepository = AppDataSource.getRepository(Kontato);

  const kontatoExist = await kontatoRepository.findOne({
    where: { id: kontatoId },
    relations: {
      user: true,
    },
  });

  if (!kontatoExist) {
    throw new AppError("Kontato not exist!", 404);
  } else if (kontatoExist.user.id != userId) {
    throw new AppError("You not have permission!", 409);
  }

  return kontatoExist;
};

export default getOneKontatoService;
