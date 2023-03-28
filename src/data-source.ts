import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Kontato } from "./entities/kontato.entity";
import { createTables1679672618422 } from "./migrations/1679672618422-createTables";
import { removeUniqueEmailOnKontatos1680026884823 } from "./migrations/1680026884823-removeUniqueEmailOnKontatos";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: true,
  entities: [User, Kontato],
  migrations: [
    createTables1679672618422,
    removeUniqueEmailOnKontatos1680026884823,
  ],
});

export default AppDataSource;
