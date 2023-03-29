import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/users/users.routes";
import { handleError } from "./errors";
import loginRoutes from "./routes/login/login.routes";
import kontatosRoutes from "./routes/kontatos/kontatos.routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/kontatos", kontatosRoutes);
app.use(handleError);

export default app;
