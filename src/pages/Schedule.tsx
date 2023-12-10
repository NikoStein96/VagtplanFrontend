import useEmployeeProfile from "@/features/Employees/hooks/useEmployeeProfile";
import OwnerSchedule from "@/features/Schedules/components/OwnerSchedule";
import EmployeeSchedule from "@/features/Schedules/components/EmployeeSchedule";

function Schedule() {
  const { data: profile } = useEmployeeProfile();

  if (!profile) {
    return null;
  }

  return profile.role == 0 ? <OwnerSchedule /> : <EmployeeSchedule />;
}

export default Schedule;
