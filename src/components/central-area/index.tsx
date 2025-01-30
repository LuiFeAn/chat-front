import { Chat } from "./chat";
import { ChatInput } from "./chat-input";
import { useCentralAreaController } from "./controller";

export const CentralArea = () => {
  const { id, handleKeyDown, handlePrompCommand, messages, promp } =
    useCentralAreaController();

  return (
    <section className="w-full flex flex-col items-center justify-center h-screen">
      <Chat messages={messages} chatId={id} />
      <ChatInput
        value={promp}
        messagesLenght={messages.length}
        onChange={handlePrompCommand}
        onSubmit={handleKeyDown}
      />
    </section>
  );
};
