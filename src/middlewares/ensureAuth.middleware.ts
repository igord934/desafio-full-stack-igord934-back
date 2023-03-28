import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Invalid token", 401);
  }
  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    async (error, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Invalid token" });
      }
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.findOne({
        where: { id: decoded.sub as string },
      });
      if (!user) {
        return res.status(401).json({ message: "Invalid token" });
      }

      req.user = user;

      return next();
    }
  );
};
export default ensureAuthMiddleware;
