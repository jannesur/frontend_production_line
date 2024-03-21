import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { BarChart2, LineChart, PieChart } from "lucide-react";
import { CustomLineChart } from "@/components/charts/line-chart.tsx";
import { CustomBarChart } from "@/components/charts/bar-chart.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useEffect, useState } from "react";
import { VehicleModel } from "@/types/types.ts";
import { useStatisticStore } from "@/store.ts";
import {
  getAllProducedCarsFromOneProductionLineForOneVehicleModel,
  getNumberOfProducedCars,
  getNumberOfProducedCarsByProductionLine,
  getProducedCarsOfVehicleType,
} from "@/api/statistic.ts";
import { CustomPieChart } from "@/components/charts/pie-chart.tsx";

export const Route = createLazyFileRoute("/statistics")({
  component: Statistics,
});

function Statistics() {
  const [mode, setMode] = useState<VehicleModel | undefined>(undefined);
  const comparableProductionLines = useStatisticStore(
    (state) => state.comparableProductionLines,
  );
  const [totalCars, setTotalCars] = useState(0);
  const [viewMode, setViewMode] = useState("");

  useEffect(() => {
    if (mode === undefined || mode.toString() === "total") {
      comparableProductionLines.forEach((productionLine) => {
        if (viewMode === "production") {
          getNumberOfProducedCarsByProductionLine(productionLine.uuid).then(
            (r) => {
              productionLine.producedCars = r;
            },
          );
        }
      });
      getNumberOfProducedCars().then((r) => {
        setTotalCars(r);
      });
    } else {
      comparableProductionLines.forEach((productionLine) => {
        getAllProducedCarsFromOneProductionLineForOneVehicleModel(
          productionLine.uuid,
          mode,
        ).then((r) => {
          productionLine.producedCars = r;
        });
      });
      getProducedCarsOfVehicleType(mode).then((r) => {
        setTotalCars(r);
      });
    }
  }, [mode]);

  return (
    <Tabs defaultValue="line" className="w-full">
      <TabsList className={"flex justify-center bg-primary rounded-none"}>
        <div className={"p-0.5"}>
          <Select onValueChange={(e) => setMode(e as unknown as VehicleModel)}>
            <SelectTrigger value="TOTAL" className={"flex align-start"}>
              <SelectValue placeholder="Vehicle model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"total"}>Total</SelectItem>
              {Object.values(VehicleModel)
                .filter((v) => v.toString().length > 1)
                .map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className={"p-0.5"}>
          <Select onValueChange={(e) => setViewMode(e)}>
            <SelectTrigger value="time" className={"flex align-start"}>
              <SelectValue placeholder="Production" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"time"}>Time</SelectItem>
              <SelectItem value={"production"}>Production</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsTrigger value="line">
          <LineChart />
        </TabsTrigger>
        <TabsTrigger value="pie">
          <PieChart />
        </TabsTrigger>
        <TabsTrigger value={"bar"}>
          <BarChart2 />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="line">
        <h1>Produced cars: {totalCars}</h1>
        <CustomLineChart
          mode={mode}
          productionLines={comparableProductionLines}
        />
      </TabsContent>
      <TabsContent value="pie">
        <h1>Produced cars: {totalCars}</h1>
        <CustomPieChart
          mode={mode}
          productionLines={comparableProductionLines}
        />
      </TabsContent>
      <TabsContent value={"bar"}>
        <h1>Produced cars: {totalCars}</h1>
        <CustomBarChart
          mode={mode}
          productionLines={comparableProductionLines}
        />
      </TabsContent>
    </Tabs>
  );
}