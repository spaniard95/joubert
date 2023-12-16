"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Lesson } from "@/types";

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
  },
  {
    accessorKey: "grade",
    header: () => <div className="text-right">Grade</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("grade")}</div>
    ),
  },
];
