import { DataTable } from "@/app/(components)";
import { Lesson } from "@/types";
import { lessonsColumns } from "@/app/(components)/custom-table/columns";
import { getLessons } from "@/app/api/lessons";

async function getData(): Promise<Lesson[]> {
  return await getLessons();
}

export default async function Lessons() {
  const data = await getData();

  return <DataTable columns={lessonsColumns} data={data} />;
}
