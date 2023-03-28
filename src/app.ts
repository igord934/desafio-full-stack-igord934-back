import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/users/users.routes";
import { handleError } from "./errors";
import loginRoutes from "./routes/login/login.routes";
import kontatosRoutes from "./routes/kontatos/kontatos.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/kontatos", kontatosRoutes);
app.use(handleError);

export default app;
