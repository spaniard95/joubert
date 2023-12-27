import { DataTable } from "@/app/(components)";
import { semesterColumns } from "@/app/(components)/custom-table/columns";
import { getSemester } from "@/app/api/lessons";
import { Semester } from "@/types";

async function getSemesterData(): Promise<Semester> {
  return await getSemester();
}

export default async function Semester({ params }: any) {
  const data = await getSemesterData();
  console.log(data.lessons);
  return <DataTable data={data.lessons} columns={semesterColumns} />;
}
