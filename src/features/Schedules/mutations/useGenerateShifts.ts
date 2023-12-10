import { useMutation, useQueryClient } from "react-query";
import { generateShifts } from "../api/indext";

const useGenerateShifts = () => {
  const queryClient = useQueryClient();
  return useMutation(generateShifts, {
    onSuccess: () => {
      queryClient.invalidateQueries(["schedule"]);
      queryClient.invalidateQueries(["schedules"]);
    },
  });
};

export default useGenerateShifts;
