import { createLazyFileRoute } from "@tanstack/react-router";
import { ProductionLineTable } from "@/components/productionline-table.tsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <ProductionLineTable />
    </div>
  );
}