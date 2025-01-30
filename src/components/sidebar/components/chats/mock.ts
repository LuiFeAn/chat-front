import { v4 } from "uuid";
export interface IChat {
  id: string;
  title: string;
  content?: string[];
}

export const chatsMock: IChat[] = [
  {
    id: v4(),
    title: "Testando 123",
  },
  {
    id: v4(),
    title: "Pesquisa Interessante",
  },
  {
    id: v4(),
    title: "Alguma coisa interessante",
  },
  {
    id: v4(),
    title: "Uhuul",
  },
];
