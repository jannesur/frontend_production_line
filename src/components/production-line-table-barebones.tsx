import { ProductionLine } from "@/types/types.ts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { useCurrentProductionLineStore } from "@/store.ts";
import { Link } from "@tanstack/react-router";

interface ProductionLineTableBarebonesProps {
  productionLines: ProductionLine[];
}

export function ProductionLineTableBarebones(
  props: ProductionLineTableBarebonesProps,
) {
  const currentProductionLine = useCurrentProductionLineStore();
  return (
    <Table>
      <TableCaption>Production Lines</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Badge className={"text-white"}>Production Line ID</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Production Line Name</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Steps</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Simulation Steps</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Status</Badge>
          </TableHead>
          <TableHead>
            <Badge className={"text-white"}>Options</Badge>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.productionLines.map((productionLine) => (
          <TableRow key={productionLine.uuid}>
            <TableCell>{productionLine.uuid}</TableCell>
            <TableCell>{productionLine.name}</TableCell>
            <TableCell>{productionLine.productionSteps.length}</TableCell>
            <TableCell>{productionLine.simulationStatus}</TableCell>
            <TableCell>{productionLine.status}</TableCell>
            <TableCell
              onClick={() =>
                currentProductionLine.setCurrentProductionLine(productionLine)
              }
            >
              <Link to={`/create-production-line`}>
                <Badge className={"text-white"}>Edit</Badge>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}