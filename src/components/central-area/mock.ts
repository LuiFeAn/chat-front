
export interface IChatMock {
    chatId: string
    content: Array<{
        input: string
    }>
}

export const chatMock = [
  {
    chatId: "aad3f9ad-50bc-45ef-8b03-07ea8d8bfa5a",
    content: [
      {
        input: "Olá, ChatGpt",
      },
      {
        output: "Olá, amigo.",
      },
      {
        input: "Como você está?",
      },
      {
        output: "Estou bem, e você?",
      },
    ],
  },
];
