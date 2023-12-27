"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CuricilumLesson, SemestersLesson, Teacher } from "@/types";

import { ColumnHeader, ColumnSettings } from "./components";
import { Badge } from "@/ui-library/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const lessonsColumns: ColumnDef<CuricilumLesson>[] = [
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
const teachersColumns: ColumnDef<Teacher>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    cell: () => {
      // const payment = row.original;

      return <ColumnSettings />;
    },
  },
];

const semesterColumns: ColumnDef<SemestersLesson>[] = [
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
    accessorKey: "teacher",
    header: ({ column }) => <ColumnHeader column={column} title="Teacher" />,
    cell: ({ row }) => <div className="pl-4">{row.getValue("teacher")}</div>,
  },
  {
    id: "actions",
    cell: () => {
      // const payment = row.original;

      return <ColumnSettings />;
    },
  },
];

export { lessonsColumns, teachersColumns, semesterColumns };
