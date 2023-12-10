import axios from "../../../util/AxiosClient";
import { Schedule } from "../types";

const getSchedules = async () => {
  const schedules = await axios.get("/Schedule");

  return schedules.data;
};

const createSchedule = async ({
  startTime,
  endTime,
}: Pick<Schedule, "startTime" | "endTime">) => {
  const schedules = await axios.post("/Schedule", {
    startTime,
    endTime,
  });
  return schedules.data;
};

const getSchedule = async ({ queryKey }: any) => {
  const [_, id] = queryKey;
  const schedules = await axios.get(`/Schedule/${id}`);

  return schedules.data;
};

const updateDay = async ({ day, firebaseId, scheduleId }: any) => {
  const updatedDay = await axios.put(`/Schedule/UpdateAvailableEmployees`, {
    day,
    firebaseId,
    scheduleId,
  });
  return updatedDay.data;
};

const generateShifts = async ({ id }: any) => {
  const updatedDay = await axios.put(
    `/Schedule/UpdateShiftDraft?scheduleid=${id}`
  );
  return updatedDay.data;
};

export { getSchedules, createSchedule, getSchedule, updateDay, generateShifts };
