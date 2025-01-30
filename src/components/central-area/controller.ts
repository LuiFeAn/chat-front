import { FormEvent, useState } from "react";
import { useParams } from "react-router";

export const useCentralAreaController = () => {
  const { id } = useParams();

  const [promp, setPrompt] = useState("");

  const handlePrompCommand = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPrompt(event.target.value);

  const handleOnFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return {
    id,
    promp,
    handlePrompCommand,
    handleOnFormSubmit,
  };
};
