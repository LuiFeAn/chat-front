interface Props {
  onSubmit(event: React.KeyboardEvent<HTMLTextAreaElement>): Promise<void>;
  onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  messagesLenght: number;
  value: string;
}

export const ChatInput = ({
  value,
  messagesLenght,
  onChange,
  onSubmit,
}: Props) => {
  return (
    <form className="w-full flex justify-center flex-col justify-center items-center gap-10">
      {messagesLenght === 0 && (
        <h1 className="font-bold text-3xl select-none">Como posso ajudar?</h1>
      )}
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={(event) => onSubmit(event)}
        placeholder="Envie uma mensagem"
        className="bg-[#F4F4F4] rounded-xl w-[40%] h p-2"
      />
    </form>
  );
};
