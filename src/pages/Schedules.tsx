import SchedulesList from "../features/Schedules/SchedulesList";
import CreateSchedule from "../features/Schedules/components/CreateSchedule";
import useSchedules from "../features/Schedules/hooks/useSchedules";

function Schedules() {
  const { data } = useSchedules();

  if (data) {
    return (
      <div>
        <CreateSchedule />
        <SchedulesList schedules={data} />
      </div>
    );
  }

  return null;
}

export default Schedules;
