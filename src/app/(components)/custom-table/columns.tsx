"use client";
import { ColumnDef } from "@tanstack/react-table";
import { BasicLesson, SemesterLesson, Teacher } from "@/types";

import { ColumnHeader, ColumnSettings } from "./components";
import { Badge } from "@/ui-library/badge";

export type EnhancedColumnDef<TData> = ColumnDef<TData> & {
  label?: string;
  options?: { label: string; value: string }[];
  accessorKey?: string;
};

const lessonsColumns: EnhancedColumnDef<BasicLesson>[] = [
  {
    accessorKey: "title",
    label: "Title",
    header: "Title",
  },
  {
    accessorKey: "category",
    label: "Category",
    header: "Category",
    options: [
      { label: "Math", value: "math" },
      { label: "Science", value: "science" },
      { label: "Biology", value: "biology" },
    ],
    cell: ({ row }) => <Badge variant="boxy">{row.getValue("category")}</Badge>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "grade",
    label: "Grade",
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

const teachersColumns: EnhancedColumnDef<Teacher>[] = [
  {
    accessorKey: "name",
    header: "Name",
    label: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    label: "Email",
  },
  {
    id: "actions",
    cell: () => {
      // const payment = row.original;

      return <ColumnSettings />;
    },
  },
];

const semesterColumns: EnhancedColumnDef<SemesterLesson>[] = [
  {
    accessorKey: "title",
    header: "Title",
    label: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
    label: "Category",
    options: [
      { label: "Math", value: "math" },
      { label: "Science", value: "science" },
      { label: "English", value: "english" },
    ],
    cell: ({ row }) => <Badge variant="boxy">{row.getValue("category")}</Badge>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "grade",
    label: "Grade",
    header: ({ column }) => <ColumnHeader column={column} title="Grade" />,
    cell: ({ row }) => <div className="pl-4">{row.getValue("grade")}</div>,
  },
  {
    accessorKey: "teacher",
    label: "Teacher",
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
