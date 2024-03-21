import { Employee } from "@/types/types.ts";
import { Badge } from "@/components/ui/badge.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { Link } from "@tanstack/react-router";
import { useCurrentEmployeeStore } from "@/store.ts";

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable(props: EmployeeTableProps) {
  const setCurrentEmployee = useCurrentEmployeeStore(
    (state) => state.setCurrentEmployee,
  );
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Badge className={"text-white"}>Station</Badge>
            </TableHead>
            <TableHead>
              <Badge className={"text-white"}>Employee Name</Badge>
            </TableHead>
            <TableHead>
              <Badge className={"text-white"}>Options</Badge>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.employees.map((employee) => (
            <TableRow key={employee.name}>
              <TableCell>{employee.station?.uuid}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell onClick={() => setCurrentEmployee(employee)}>
                <Link to={`/create-employee`}>
                  <Badge className={"text-white"}>Edit</Badge>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}