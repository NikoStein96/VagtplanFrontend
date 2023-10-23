import { useQuery } from "react-query";
import { Schedule } from "../types";
import { getSchedule } from "../api/indext";

const useSchedule = (id:string) => {
    
  return useQuery<Schedule, Error>(["schedule", id], getSchedule);
};

export default useSchedule;
