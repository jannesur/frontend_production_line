import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Table } from "@/components/ui/table.tsx";
import { Employee } from "@/types/types.cjs";

export function createStation(employees: Employee[]) {
  return (
    <>
      <div className={"flex justify-center pt-10 gap-4"}>
        <Badge className={"text-white"}>Station name</Badge>
        <Input placeholder={"Station name"} required className={"w-1/2"} />
      </div>
      <div className={"flex justify-center pt-10 gap-4 px-4"}>
        {employees.length > 0 ? (
          <>
            <Badge className={"text-white"}>Available Employees</Badge>
            <Table>
              <thead>
                <tr>
                  <th>
                    <Badge className={"text-white"}>Employee ID</Badge>
                  </th>
                  <th>
                    <Badge className={"text-white"}>Employee Name</Badge>
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr>
                    <td>{employee.uuid}</td>
                    <td>{employee.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <div className={"justify-center flex"}>
            <Badge className={"text-white"}>No Employees available.</Badge>
          </div>
        )}
      </div>
    </>
  );
}