import { ILike } from "typeorm";
import AppDataSource from "../../data-source";
import { Kontato } from "../../entities/kontato.entity";
import { AppError } from "../../errors";
import {
  iKontatoRequest,
  iKontatoResponse,
} from "../../interfaces/kontatos.interfaces";
import { iUserResponse } from "../../interfaces/users.intefaces";
import { kontatoResponseSerializer } from "../../serializers/kontatos.serializers";

const createKontatoService = async (
  usersData: iUserResponse,
  kontatosData: iKontatoRequest
): Promise<iKontatoResponse> => {
  const kontatoRepository = AppDataSource.getRepository(Kontato);

  const kontatoExist = await kontatoRepository.find({
    where: { email: ILike(`${kontatosData.email}`) },
    relations: {
      user: true,
    },
  });

  console.log(kontatoExist);
  kontatoExist.forEach((kontato) => {
    if (kontato.user.id == usersData.id) {
      throw new AppError("Already existe kontact in your list.", 409);
    }
  });

  const createdKontato = kontatoRepository.create({
    ...kontatosData,
    user: usersData,
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

export default createKontatoService;
