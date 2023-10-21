import { useMutation, useQueryClient } from "react-query";
import { createSchedule } from "../api/indext";

const useCreateSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation(createSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedules");
    },
  });
};

export default useCreateSchedule;
