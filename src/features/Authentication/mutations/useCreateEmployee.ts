import { useMutation, useQueryClient } from "react-query";
import { createEmployee } from "../api";

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation(createEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries("employees");
    },
  });
};
