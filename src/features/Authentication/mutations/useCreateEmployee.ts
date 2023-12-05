import { useMutation } from "react-query";
import { createEmployee } from "../api";

export const useCreateEmployee = () => {
  return useMutation(createEmployee);
};
