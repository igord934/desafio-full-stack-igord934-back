import { Kontato } from "../entities/kontato.entity";

export interface iUserRequest {
  name: string;
  email: string;
  number: string;
  password: string;
}

export interface iUserResponse {
  id: string;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
  kontatos?: Kontato[];
}

export interface iUserPatchRequest {
  name?: string;
  email?: string;
  password?: string;
  number?: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}
