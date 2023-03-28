import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  iKontatoRequest,
  iKontatoResponse,
} from "../interfaces/kontatos.interfaces";

const createKontatoSerializer: SchemaOf<iKontatoRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  number: yup.string().required(),
});

const updateKontatoSerializer: SchemaOf<iKontatoRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  number: yup.string().required(),
});

const kontatoResponseSerializer: SchemaOf<iKontatoResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    number: yup.string().required(),
    createdAt: yup.date().required(),
  });

const listKontatoResponseSerializer: SchemaOf<iKontatoResponse[]> = yup.array(
  kontatoResponseSerializer
);

export {
  createKontatoSerializer,
  kontatoResponseSerializer,
  updateKontatoSerializer,
  listKontatoResponseSerializer,
};
