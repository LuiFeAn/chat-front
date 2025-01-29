export const ChatInput = () => {
  return (
    <>
      <h1 className="font-bold text-3xl select-none">Como posso ajudar?</h1>

      <div className="w-full flex justify-center mt-10 h-[12%]">
        <textarea
          placeholder="Envie uma mensagem"
          className="bg-[#F4F4F4] rounded-xl w-[40%] h p-2"
        />
      </div>
    </>
  );
};
