export interface IChat {
  id: string;
  title: string;
  content?: string[];
}

export const chatsMock: IChat[] = [
  {
    id: "aad3f9ad-50bc-45ef-8b03-07ea8d8bfa5a",
    title: "Testando 123",
  },
  {
    id: "a0cad82c-8692-49e8-b445-38f48486c21e",
    title: "Pesquisa Interessante",
  },
  {
    id: "a142d88f-fc5e-4682-98ca-98913f3ef241",
    title: "Alguma coisa interessante",
  },
  {
    id: "bdfbc8b3-b0b3-43fb-9b2f-79d52879e36f",
    title: "Uhuul",
  },
];
