import AppDataSource from "../../data-source";
import { Kontato } from "../../entities/kontato.entity";
import { AppError } from "../../errors";
import {
  iKontatoRequest,
  iKontatoResponse,
} from "../../interfaces/kontatos.interfaces";
import { kontatoResponseSerializer } from "../../serializers/kontatos.serializers";

const updateKontatoService = async (
  userId: string,
  kontatoId: string,
  kontatoData: iKontatoRequest
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

  const createdKontato = kontatoRepository.create({
    ...kontatoExist,
    ...kontatoData,
  });

  await kontatoRepository.save(createdKontato);

  const returnedData = await kontatoResponseSerializer.validate(
    createdKontato,
    {
      stripUnknown: true,
    }
  );

  return returnedData;
};

export default updateKontatoService;
