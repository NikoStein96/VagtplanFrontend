import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { User } from "firebase/auth";
import axios from "axios";
import { getUserToken } from "./util/getToken";

interface Employee {
  id: number;
  name: string;
  // Define other properties here if necessary
}

const Protected = () => {
  const [user, setUser] = useState<User | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]); // Specify the type here

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

  if (!user) {
    return <div>You must be logged in to view this page.</div>;
  }

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee, i) => (
          <li key={i}>hej</li>
        ))}
      </ul>
    </div>
  );
};

export default Protected;
