import { Schedule } from "./types";

interface SchedulesListProps {
  schedules: Schedule[];
}

function SchedulesList({ schedules }: SchedulesListProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Schedule name
            </th>
            <th scope="col" className="px-6 py-3">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3">
              End Date
            </th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => {
            return (
              <tr className="bg-white border-b cursor-pointer">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Name
                </td>
                <td className="px-6 py-4 ">{schedule.startTime}</td>
                <td className="px-6 py-4 ">{schedule.endTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SchedulesList;
