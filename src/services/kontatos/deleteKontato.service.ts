import AppDataSource from "../../data-source";
import { Kontato } from "../../entities/kontato.entity";
import { AppError } from "../../errors";

const deleteKontatoService = async (userId: string, kontatoId: string) => {
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

  await kontatoRepository.delete({ id: kontatoId });

  return null;
};

export default deleteKontatoService;
