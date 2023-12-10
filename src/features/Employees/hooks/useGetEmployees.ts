import { useQuery } from "react-query";
import { getEmployees } from "../api/index";

const useGetEmployees = () => {
  return useQuery<any, Error>(["employees"], getEmployees);
};

export default useGetEmployees;
