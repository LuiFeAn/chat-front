interface Props {
  onSubmit(event: React.KeyboardEvent<HTMLTextAreaElement>): Promise<void>;
  onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  sendingPrompt: boolean;
  messagesLenght: number;
  value: string;
}

export const ChatInput = ({
  value,
  sendingPrompt,
  messagesLenght,
  onChange,
  onSubmit,
}: Props) => {
  return (
    <form className="w-full flex justify-center flex-col items-center gap-10 h-[30%]">
      {messagesLenght === 0 && (
        <h1 className="font-bold text-3xl select-none">Como posso ajudar?</h1>
      )}
      <textarea
        value={value}
        disabled={sendingPrompt}
        autoFocus={sendingPrompt}
        onChange={onChange}
        onKeyDown={(event) => onSubmit(event)}
        placeholder="Envie uma mensagem"
        className="bg-[#F4F4F4] rounded-xl w-[45%] p-2 resize-none h-[35%]"
      />
    </form>
  );
};
