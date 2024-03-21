import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { PlusCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"hover:bg-secondary py-2 px-4 rounded"}>
        <PlusCircle />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className={"text-xl bg-accent"}>
          Create
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/create-robot">Create Robot</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/create-station">Create Station</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/create-employee">Create Employee</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/create-production-line">Create Production Line</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}