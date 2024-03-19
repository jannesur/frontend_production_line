import { Station } from "@/types/types.ts";
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
import { useCurrentStationStore } from "@/store.ts";

interface StationTableProps {
  stations: Station[];
}

export function StationTable(props: StationTableProps) {
  const setCurrentStation = useCurrentStationStore(
    (state) => state.setCurrentStation,
  );
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Badge className={"text-white"}>Station ID</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Station Name</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Employees</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Productionline</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Options</Badge>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.stations.map((station) => (
          <TableRow>
            <TableCell>{station.uuid}</TableCell>
            <TableCell>{station.name}</TableCell>
            <TableCell>
              {station.employees.map((employee) => (
                <div>{employee.name}</div>
              ))}
            </TableCell>
            <TableCell>{station.productionLine?.name}</TableCell>
            <TableCell onClick={() => setCurrentStation(station)}>
              <Link to={`/create-station`}>
                <Badge className={"text-white"}>Edit</Badge>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}