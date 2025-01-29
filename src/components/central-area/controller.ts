import { useParams } from "react-router";

export const useCentralAreaController = () => {
  const { id } = useParams();

  return {
    id,
  };
};
