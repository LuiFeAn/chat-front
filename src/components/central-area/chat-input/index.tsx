interface Props {
  onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void>;
  onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export const ChatInput = ({ onChange, onSubmit }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex justify-center flex-col justify-center items-center gap-10"
    >
      <h1 className="font-bold text-3xl select-none">Como posso ajudar?</h1>
      <textarea
        onChange={onChange}
        placeholder="Envie uma mensagem"
        className="bg-[#F4F4F4] rounded-xl w-[40%] h p-2"
      />
    </form>
  );
};
