import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import { ILike } from "typeorm";
import { iUserLogin } from "../../interfaces/users.intefaces";
import { User } from "../../entities/user.entity";

const loginService = async (userData: iUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: ILike(`${userData.email}`),
  });

  if (!user) {
    throw new AppError("Email or password invalid", 403);
  }
  const passwordMatch = await compare(userData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 403);
  }

  const token = jwt.sign(
    { email: user.email },
    process.env.SECRET_KEY as string,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return token;
};

export default loginService;
