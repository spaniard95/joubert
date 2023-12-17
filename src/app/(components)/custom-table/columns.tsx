"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Lesson } from "@/types";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui-library/dropdown-menu";
import { Button } from "@/ui-library/button";
import { DataTableColumnHeader } from "./components";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Lesson>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "grade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Grade" />
    ),
    cell: ({ row }) => <div className="pl-4">{row.getValue("grade")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        // TODO: extract this into a component
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center justify-center h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Lesson</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => console.log}>
              Add to portfolio
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Statistics</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
