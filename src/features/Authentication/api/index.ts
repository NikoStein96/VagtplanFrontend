import axios from "../../../util/AxiosClient";

export const createOwner = async (data: any) => {
  const res = await axios.post("/Employee/Owners", data);

  return res.data;
};

export const createEmployee = async (data: any) => {
  const res = await axios.post("/Employee/Employees", data);

  return res.data;
};
