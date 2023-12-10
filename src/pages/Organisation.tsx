import useGetEmployees from "@/features/Employees/hooks/useGetEmployees";
import CreateEmployee from "@/features/Organisation/components/CreateEmployee";

function Organisation() {
  const { data } = useGetEmployees();

  return (
    <div>
      <div className="flex-inline flex-col p-5 border-2 rounded-xl inline-block">
        {data?.map((employee: any) => {
          return (
            <div className="my-5" key={employee.id}>
              <div>{employee.name}</div>
              <div>{employee.email}</div>
            </div>
          );
        })}
      </div>

      <CreateEmployee />
    </div>
  );
}

export default Organisation;
