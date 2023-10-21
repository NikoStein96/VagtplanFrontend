import { useQuery } from "react-query";
import { Schedule } from "../types";
import { getSchedules } from "../api/indext";

const useSchedules = () => {
  return useQuery<Schedule[], Error>("schedules", getSchedules);
};

export default useSchedules;
