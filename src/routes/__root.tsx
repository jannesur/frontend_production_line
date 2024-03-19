import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Card } from "@/components/ui/card.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useSearchStore } from "@/store.ts";
import { SelectTypeBarebones } from "@/components/select-type-barebones.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { BarChart2, PlusCircle, Search } from "lucide-react";
import { FetchData } from "@/hooks/fetchData.ts";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button.tsx";

export const Route = createRootRoute({
  component: Index,
});

function Index() {
  const state = useSearchStore();
  FetchData();
  return (
    <>
      <ThemeProvider>
        <div className="p-2 px-16 flex justify-between bg-primary text-white">
          <Link to="/" className="text-2xl  align-center flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/214px-Volkswagen_Logo_till_1995.svg.png"
              alt="Volkswagen"
              className="h-10 w-10 mr-2 inline rounded-full"
            />
          </Link>
          <div className={"flex justify-center flex-row align-middle"}>
            <Input
              placeholder={"Start typing..."}
              autoFocus
              className={"w-[250px] text-input"}
              onChange={(e) => state.setQuery(e.target.value)}
              value={state.query}
            />
            <div className={"px-2"}>
              <SelectTypeBarebones />
            </div>
            <Link to="/search">
              <Search className={"h-10"} />
            </Link>
          </div>
          <div className={"align-center"}>
            <Button variant={"ghost"}>
              <Link to={"/statistics"} className={"text-white"}>
                <BarChart2 />
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant={"ghost"}>
                  <PlusCircle />
                </Button>
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
                  <Link to="/create-production-line">
                    Create Production Line
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </div>
        <hr />
        <div className={"px-36 pt-4"}>
          <Card className={"rounded-none h-[calc(100vh-100px)] overflow-auto"}>
            <Outlet />
          </Card>
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  );
}