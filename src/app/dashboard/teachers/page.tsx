import { Teacher } from "@/types";
import { getTeachers } from "@/app/api/teachers";
import { teachersColumns } from "@/app/(components)/custom-table/columns";
import { DataTable } from "@/app/(components)";

async function getData(): Promise<Teacher[]> {
  return await getTeachers();
}

export default async function Teachers() {
  const data = await getData();

  return <DataTable columns={teachersColumns} data={data} />;
}
