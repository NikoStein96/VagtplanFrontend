import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { User } from "firebase/auth";
import axios from "axios";
import { getUserToken } from "./util/getToken";
import { useForm, SubmitHandler } from "react-hook-form"

interface Schedule {
  id: number;
  name: string;
  // Define other properties here if necessary
}

const Protected = () => {
  const {register,handleSubmit} = useForm();
  const [user, setUser] = useState<User | null>(null);
  const [employees, setEmployees] = useState<Schedule[]>([]); // Specify the type here

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    const fetchEmployees = async () => {
      const userToken = await getUserToken();
      console.log(userToken);
      try {
        const response = await axios.get(
          "https://localhost:7168/api/Schedule",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();

    return () => {
      unsubscribe();
    };
  }, []);

  const onSubmit = (data:any) => console.log(data)

  if (!user) {
    return <div>You must be logged in to view this page.</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Start Time</label>
                <input type="date" {...register("start")} id="startTime" name="start" className="mt-1 p-2 w-full border rounded-md"/>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">End Time</label>
                <input type="date" id="endTime" {...register("end")} name="end" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create Schedule</button>
        </form>
     
    </div>
  );
};

export default Protected;
