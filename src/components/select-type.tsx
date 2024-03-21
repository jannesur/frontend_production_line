import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useTypeStore } from "@/store.ts";

export function SelectType() {
  const setType = useTypeStore((state) => state.setType);

  return (
    <div className="flex justify-center align-center pt-10 border-b bg-accent">
      <h1 className={"text-2xl pr-2"}>Create new </h1>
      <Select onValueChange={(value) => setType(value)} defaultValue={"line"}>
        <SelectTrigger className="w-[250px] text-2xl">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"line"}>Production Line</SelectItem>
          <SelectItem value={"station"}>Station</SelectItem>
          <SelectItem value={"employee"}>Employee</SelectItem>
          <SelectItem value={"robot"}>Robot</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}