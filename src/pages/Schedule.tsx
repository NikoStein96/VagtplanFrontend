import React from 'react'
import useSchedule from '../features/Schedules/hooks/useSchedule'
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';





function Schedule() {

    let {id} = useParams();
    const {data} = useSchedule(id!);

    console.log(data);
  
  if(data){

    const firstDate = dayjs(data.days[0].dayDate);
    const offset = firstDate.day()-1;

    return (
    
    <div id="calendar" className="p-4">
  <div className="grid grid-cols-7 gap-4">
    
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div>

    {[...Array(offset)].map((_, i) => (
            <div key={`empty-${i}`} className="border rounded p-2"></div>
          ))}

          {data.days.map((day, index) => (
            <div key={`date-${index}`} className="border rounded p-2">
              {dayjs(day.dayDate).format("DD")}
            </div>
          ))}
    
    
   
    </div>
    
    
  </div>
  )
} else return null
}

export default Schedule