import axios from "../../../util/AxiosClient";

export const getProfile = async () => {
  const profile = await axios.get("/Employee/EmployeeProfile");

  return profile.data;
};

export const getEmployees = async () => {
  const employees = await axios.get("/Employee");

  return employees.data;
};
