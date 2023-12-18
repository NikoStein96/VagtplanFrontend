import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSchedule from "../hooks/useSchedule";
import { Day } from "../types";
import dayjs from "dayjs";
import useGetEmployees from "@/features/Employees/hooks/useGetEmployees";
import { Button } from "@/components/ui/button";
import useGenerateShifts from "../mutations/useGenerateShifts";

function OwnerSchedule() {
  let { id } = useParams();
  const { data } = useSchedule(id!);
  const { data: employees } = useGetEmployees();

  const { mutate } = useGenerateShifts();

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
  console.log(filledDaysToDisplay);

  const filtered_employees = employees?.filter(
    (employee: any) => employee.role == 1
  );

  return (
    <div className="p-4 h-[calc(100%-40px)]">
      <div className="flex justify-between">
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

        {filtered_employees?.map((user: any) => (
          <React.Fragment key={user.firebaseId}>
            <div className="border">{user.email}</div>
            {filledDaysToDisplay?.map((day) => (
              <div key={day.dayDate} className="border flex flex-col">
                {Object.keys(day).length !== 0
                  ? day.availableEmployees?.find((shift: any) => {
                      return shift.firebaseId === user.firebaseId;
                    })
                    ? "Yes"
                    : "No"
                  : null}

                {day.shifts?.find((shift: any) => {
                  return shift.employeeId === user.firebaseId;
                }) ? (
                  <div className="bg-green-500 w-full h-full"></div>
                ) : null}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <Button
        onClick={() => {
          mutate({ id: data?.id });
        }}
        className="mt-5"
      >
        Generate
      </Button>
    </div>
  );
}

export default OwnerSchedule;
