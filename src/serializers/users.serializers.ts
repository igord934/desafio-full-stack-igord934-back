import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  iUserPatchRequest,
  iUserRequest,
  iUserResponse,
} from "../interfaces/users.intefaces";

const createUserSerializer: SchemaOf<iUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  number: yup.string().required(),
});

const userResponseSerializer: SchemaOf<iUserResponse> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  number: yup.string().required(),
  createdAt: yup.date().required(),
  kontatos: yup
    .array()
    .of(
      yup
        .object({
          id: yup.string().required(),
          name: yup.string().required(),
          email: yup.string().required(),
          number: yup.string().required(),
          createdAt: yup.date().required(),
        })
        .notRequired()
    )
    .notRequired(),
});

const userPatchRequestSerializer: SchemaOf<iUserPatchRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup.string().notRequired(),
    number: yup.string().notRequired(),
  });

export {
  createUserSerializer,
  userResponseSerializer,
  userPatchRequestSerializer,
};
