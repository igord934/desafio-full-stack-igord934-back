import * as yup from "yup";
import { SchemaOf } from "yup";
import { iUserLogin } from "../interfaces/users.intefaces";

const loginSerializer: SchemaOf<iUserLogin> = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export { loginSerializer };
