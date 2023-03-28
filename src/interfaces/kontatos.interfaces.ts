export interface iKontatoRequest {
  name: string;
  email: string;
  number: string;
}

export interface iKontatoPatchRequest {
  name?: string;
  email?: string;
  number?: string;
}

export interface iKontatoResponse {
  id: string;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
}
