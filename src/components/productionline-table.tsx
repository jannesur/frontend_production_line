import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button.tsx";
import { ProductionDrawer } from "@/components/drawer.tsx";
import {
  useCurrentProductionLineStore,
  useProductionLinesStore,
  useStatisticStore,
} from "@/store.ts";
import {
  CircleCheck,
  CirclePause,
  MinusCircle,
  Option,
  PieChart,
  PlusCircle,
  PowerCircle,
} from "lucide-react";
import { SimulationStatus, Status } from "@/types/types.ts";

export function ProductionLineTable() {
  const setCurrentProductionLine = useCurrentProductionLineStore(
    (state) => state.setCurrentProductionLine,
  );
  const productionLines = useProductionLinesStore(
    (state) => state.productionLines,
  );
  const comparable = useStatisticStore();
  return (
    <div className="p-2">
      <Table>
        <TableCaption>Production Lines</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Production Line ID</TableHead>
            <TableHead>Production Line Name</TableHead>
            <TableHead>Steps</TableHead>
            <TableHead>Simulation Status</TableHead>
            <TableHead>
              <PowerCircle />
              Status
            </TableHead>
            <TableHead>
              <Option />
              Options
            </TableHead>
            <TableHead></TableHead>
            <TableHead>
              <PieChart />
              Statistics
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productionLines.map((productionLine) => (
            <TableRow key={productionLine.uuid}>
              <TableCell>{productionLine.uuid}</TableCell>
              <TableCell>{productionLine.name}</TableCell>
              <TableCell>{productionLine.productionSteps.length}</TableCell>
              <TableCell>
                {productionLine.simulationStatus ===
                SimulationStatus.RUNNING ? (
                  <CircleCheck />
                ) : (
                  <>
                    <CirclePause />
                    Stopped
                  </>
                )}
              </TableCell>
              <TableCell>
                {productionLine.status === Status.READY ? (
                  <CircleCheck />
                ) : (
                  <>
                    <MinusCircle />
                    Incomplete
                  </>
                )}
              </TableCell>
              <TableCell
                onClick={() => {
                  setCurrentProductionLine(productionLine);
                }}
              >
                <Link
                  to={`/create-production-line`}
                  className={"border p-2 rounded"}
                >
                  Edit
                </Link>
              </TableCell>
              <TableCell
                onClick={() => setCurrentProductionLine(productionLine)}
              >
                <ProductionDrawer />
              </TableCell>
              <TableCell>
                {comparable.comparableProductionLines.includes(
                  productionLine,
                ) ? (
                  <Button
                    variant={"outline"}
                    onClick={() =>
                      comparable.setComparableProductionLines(
                        comparable.comparableProductionLines.filter(
                          (pl) => pl.uuid !== productionLine.uuid,
                        ),
                      )
                    }
                  >
                    <MinusCircle />
                  </Button>
                ) : (
                  <Button
                    variant={"outline"}
                    onClick={() =>
                      comparable.setComparableProductionLines([
                        ...comparable.comparableProductionLines,
                        productionLine,
                      ])
                    }
                  >
                    <PlusCircle />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}