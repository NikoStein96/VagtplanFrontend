import React, { useState } from "react";
import useSchedule from "../features/Schedules/hooks/useSchedule";
import { useParams } from "react-router-dom";
import { Day } from "../features/Schedules/types";
import dayjs from "dayjs";

function Schedule() {
  let { id } = useParams();
  const { data } = useSchedule(id!);
  const users = ["John", "Jane", "Doe"];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  // Handlers for next and previous week
  const handleNextWeek = () => {
    if (data && currentPage < data.days.length / itemsPerPage - 1) {
      setCurrentPage((current) => current + 1);
    }
  };

  const handlePrevWeek = () => {
    setCurrentPage((current) => Math.max(current - 1, 0));
  };

  // Calculate slice of days for current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const daysToDisplay = data?.days.slice(startIndex, endIndex);

  const fillEmptySlots = (days: Day[]) => {
    const filledDays = [...days];
    while (filledDays.length < itemsPerPage) {
      filledDays.push({} as Day); // Adding an empty object or specific structure
    }
    return filledDays;
  };

  const filledDaysToDisplay = fillEmptySlots(daysToDisplay || []);

  return (
    <div className="p-4 h-full">
      <div>
        <button onClick={handlePrevWeek}>Back</button>
        <button onClick={handleNextWeek}>Next</button>
      </div>
      <div className="grid grid-cols-8 h-full grid-rows-[50px_auto] overflow-y-auto">
        <div className="border"></div>
        {filledDaysToDisplay.map((day) => {
          return (
            <div
              key={day.id}
              className="border flex justify-center items-center"
            >
              {day.dayDate ? dayjs(day.dayDate).format("ddd DD") : null}
            </div>
          );
        })}

        {users.map((user, i) => (
          <React.Fragment key={user}>
            <div className="border">{user}</div>
            {filledDaysToDisplay?.map((day) => (
              <div key={day.dayDate} className="border cursor-pointer">
                yep
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
