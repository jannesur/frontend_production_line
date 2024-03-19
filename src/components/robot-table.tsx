import { Robot } from "@/types/types.ts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { useCurrentRobotStore } from "@/store.ts";
import { Link } from "@tanstack/react-router";

interface RobotTableProps {
  robots: Robot[];
}

export function RobotTable(props: RobotTableProps) {
  const setCurrentRobot = useCurrentRobotStore(
    (state) => state.setCurrentRobot,
  );
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Badge className={"text-white"}>Robot ID</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Robot Name</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Productionline</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Duration in minutes</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Options</Badge>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.robots.map((robot) => (
          <TableRow key={robot.uuid}>
            <TableCell>{robot.uuid}</TableCell>
            <TableCell>{robot.name}</TableCell>
            <TableCell>{robot.productionLine?.name}</TableCell>
            <TableCell>{robot.durationInMinutes}</TableCell>
            <TableCell onClick={() => setCurrentRobot(robot)}>
              <Link to={`/create-robot`}>
                <Badge className={"text-white"}>Edit</Badge>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}