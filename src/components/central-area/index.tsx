import { Chat } from "./chat";
import { ChatInput } from "./chat-input";
import { useCentralAreaController } from "./controller";

export const CentralArea = () => {
  const { id } = useCentralAreaController();

  return (
    <section className="w-full flex flex-col items-center justify-center h-screen">
      <Chat chatId={id} />
      <ChatInput />
    </section>
  );
};
