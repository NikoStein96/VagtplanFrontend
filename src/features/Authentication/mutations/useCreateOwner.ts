import { useMutation } from "react-query";
import { createOwner } from "../api";

export const useCreateOwner = () => {
  return useMutation(createOwner);
};
