import { useMutation, useQueryClient } from "react-query";
import { updateDay } from "../api/indext";

const useUpdateDay = () => {
  const queryClient = useQueryClient();
  return useMutation(updateDay, {
    onSuccess: () => {
      queryClient.invalidateQueries(["schedule"]);
    },
  });
};

export default useUpdateDay;
