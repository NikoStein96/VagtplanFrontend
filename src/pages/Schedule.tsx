import React, { useState } from "react";
import useSchedule from "../features/Schedules/hooks/useSchedule";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

function Schedule() {
  let { id } = useParams();
  const { data } = useSchedule(id!);
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const getDaysArray = () => {
    const firstDayOfMonth = currentMonth.startOf("month");
    const firstDayOfWeek =
      firstDayOfMonth.day() === 1
        ? firstDayOfMonth
        : firstDayOfMonth.subtract(firstDayOfMonth.day() - 1, "day");
    const daysArray = Array.from({ length: 42 }, (_, i) =>
      firstDayOfWeek.add(i, "day")
    );
    return daysArray;
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  if (data) {
    const isDayInSchedule = (day: dayjs.Dayjs) => {
      const dayString = day.format("YYYY-MM-DD");
      console.log(dayString, day);
      return data.days.some((scheduleDay) => scheduleDay.dayDate === dayString);
    };

    return (
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <button
            onClick={handlePrevMonth}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <span>{currentMonth.format("MMMM YYYY")}</span>
          <button
            onClick={handleNextMonth}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => {
            return (
              <div className="text-center py-2 rounded text-black">{day}</div>
            );
          })}

          {getDaysArray().map((day, index) => {
            const isInSchedule = isDayInSchedule(day);
            return (
              <div
                key={index}
                className={`text-center py-2 rounded ${
                  isInSchedule ? "bg-gray-200" : "bg-gray-500"
                }`}
              >
                {day.date()}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return null;
}

export default Schedule;
