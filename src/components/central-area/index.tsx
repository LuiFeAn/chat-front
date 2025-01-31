import { Chat } from "./chat";
import { ChatInput } from "./chat-input";
import { useCentralAreaController } from "./controller";

export const CentralArea = () => {
  const {
    id,
    handleKeyDown,
    handlePromptCommand,
    messages,
    currentMessage,
    promp,
    sendingPrompt,
  } = useCentralAreaController();

  return (
    <section className="w-full flex flex-col items-center justify-center h-screen">
      <Chat currentMessage={currentMessage} messages={messages} chatId={id} />
      <ChatInput
        value={promp}
        sendingPrompt={sendingPrompt}
        messagesLenght={messages.length}
        onChange={handlePromptCommand}
        onSubmit={handleKeyDown}
      />
    </section>
  );
};
