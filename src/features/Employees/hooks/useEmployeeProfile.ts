import { useQuery } from "react-query";
import { getProfile } from "../api/index";

const useEmployeeProfile = () => {
  return useQuery<any, Error>(["schedule"], getProfile);
};

export default useEmployeeProfile;
