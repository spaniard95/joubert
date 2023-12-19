"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Lesson } from "@/types";

import { ColumnHeader, ColumnSettings } from "./components";
import { Badge } from "@/ui-library/badge";

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
    cell: ({ row }) => <Badge variant="boxy">{row.getValue("category")}</Badge>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "grade",
    header: ({ column }) => <ColumnHeader column={column} title="Grade" />,
    cell: ({ row }) => <div className="pl-4">{row.getValue("grade")}</div>,
  },
  {
    id: "actions",
    cell: () => {
      // const payment = row.original;

      return <ColumnSettings />;
    },
  },
];
