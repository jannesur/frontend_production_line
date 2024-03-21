import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Card } from "@/components/ui/card.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useSearchStore } from "@/store.ts";
import { SelectTypeBarebones } from "@/components/select-type-barebones.tsx";
import { BarChart2, Search } from "lucide-react";
import { FetchData } from "@/hooks/fetchData.ts";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button.tsx";
import { NavDropdown } from "@/components/nav-dropdown.tsx";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: Index,
});

function Index() {
  const state = useSearchStore();
  FetchData();
  return (
    <>
      <ThemeProvider>
        <div className={"p-2 px-16 flex justify-between bg-primary text-white"}>
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
              <Button
                variant={"ghost"}
                className={"border border-white rounded"}
              >
                <Search className={"h-10"} />
              </Button>
            </Link>
          </div>
          <div>
            <Button variant={"ghost"}>
              <Link to={"/statistics"} className={"text-white"}>
                <BarChart2 />
              </Link>
            </Button>
            <NavDropdown />
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
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  );
}