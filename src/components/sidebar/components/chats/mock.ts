import { randomUUID } from "crypto";

export interface IChat {
  id: string;
  title: string;
  content?: string[];
}

export const chatsMock: IChat[] = [
  {
    id: randomUUID(),
    title: "Testando 123",
  },
  {
    id: randomUUID(),
    title: "Pesquisa Interessante",
  },
  {
    id: randomUUID(),
    title: "Alguma coisa interessante",
  },
  {
    id: randomUUID(),
    title: "Uhuul",
  },
];
