export interface Schedule {
  id: number;
  startTime: string;
  endTime: string;
  days: Day[];
}

export interface Day {
  id: number;
  shifts: any;
  scheduleId: number;
}
