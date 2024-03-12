import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "@/data/productionline_table_def.ts";
import { useEffect, useState } from "react";
import { useSearchStore } from "@/store.ts";
import { ProductionDrawer } from "@/components/drawer.tsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const query = useSearchStore((state) => state.query);
  const [data, setData] = useState([]);
  useEffect(() => {
    function filterData() {
      return data.filter((row) => {
        return Object.values(row).some((value) => {
          return String(value).toLowerCase().includes(query.toLowerCase());
        });
      });
    }

    console.log("filtering data");
    setData(filterData());
  }, [query]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ProductionDrawer />
    </div>
  );
}