export interface IChat {
  id: string;
  title: string;
  content?: string[];
}

export const chatsMock: IChat[] = [
  {
    id: "123",
    title: "Testando 123",
  },
  {
    id: "321",
    title: "Pesquisa Interessante",
  },
  {
    id: "231",
    title: "Alguma coisa interessante",
  },
  {
    id: "312",
    title: "Uhuul",
  },
];
