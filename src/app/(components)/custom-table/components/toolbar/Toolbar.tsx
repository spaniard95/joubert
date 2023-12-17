"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  XCircle,
  HelpCircle,
} from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/ui-library/button";
import { Input } from "@/ui-library/input";

import { FacetedFilter } from "./components";
// import { Arrow } from "@radix-ui/react-dropdown-menu";

export const categories = [
  { label: "math", value: "math" },
  { label: "science", value: "science" },
];

interface ToolbarProps<TData> {
  table: Table<TData>;
}

function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* {table.getColumn("status") && (
          <FacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )} */}
        {table.getColumn("category") && (
          <FacetedFilter
            column={table.getColumn("category")}
            title="category"
            options={categories}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XCircle className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}

export default Toolbar;
