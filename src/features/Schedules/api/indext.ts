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
  const schedules = await axios.post("/Schedule/createSchedule", {
    startTime,
    endTime,
  });
  return schedules.data;
};

export { getSchedules, createSchedule };
