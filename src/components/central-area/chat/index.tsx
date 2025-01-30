interface Props {
  chatId?: string;
}
export const Chat = ({ chatId }: Props) => {
  return <>{chatId && <div></div>}</>;
};
