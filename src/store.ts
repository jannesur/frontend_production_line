import { create } from "zustand";
import {
  Employee,
  ProductionLine,
  ProductionStep,
  Robot,
  Station,
} from "@/types/types.cjs";

interface SearchStore {
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query }),
}));

interface SelectedEntity {
  entity: Employee | ProductionLine | ProductionStep | Station | Robot;
  setEntity: (
    entity: Employee | ProductionLine | ProductionStep | Station | Robot,
  ) => void;
}

export const useEntityStore = create<SelectedEntity>((set) => ({
  entity: {} as Employee | ProductionLine | ProductionStep | Station | Robot,
  setEntity: (
    entity: Employee | ProductionLine | ProductionStep | Station | Robot,
  ) => set({ entity }),
}));

interface SelectedType {
  type: string;
  setType: (type: string) => void;
}

export const useTypeStore = create<SelectedType>((set) => ({
  type: "employee",
  setType: (type: string) => set({ type }),
}));