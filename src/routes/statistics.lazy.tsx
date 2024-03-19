import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { LineChart, PieChart } from "lucide-react";
import { CustomLineChart } from "@/components/line-chart.tsx";
import { CustomBarChart } from "@/components/bar-chart.tsx";

export const Route = createLazyFileRoute("/statistics")({
  component: Statistics,
});

function Statistics() {
  return (
    <Tabs defaultValue="line" className="w-full">
      <TabsList className={"flex justify-center bg-primary"}>
        <TabsTrigger value="line">
          <LineChart />
        </TabsTrigger>
        <TabsTrigger value="pie">
          <PieChart />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="line">
        <CustomLineChart />
      </TabsContent>
      <TabsContent value="pie">
        <CustomBarChart />
      </TabsContent>
    </Tabs>
  );
}