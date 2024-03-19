import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useTypeStore } from "@/store.ts";

export function SelectTypeBarebones() {
  const setType = useTypeStore((state) => state.setType);
  return (
    <Select onValueChange={(value) => setType(value)}>
      <SelectTrigger className="w-[250px] text-input">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"line"}>Production Line</SelectItem>
        <SelectItem value={"station"}>Station</SelectItem>
        <SelectItem value={"employee"}>Employee</SelectItem>
        <SelectItem value={"robot"}>Robot</SelectItem>
      </SelectContent>
    </Select>
  );
}