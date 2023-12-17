import { Lesson } from "@/types";
import { DataTable } from "../(components)";
import { columns } from "../(components)/custom-table/columns"; // fix this
import { getLessons } from "./data";

async function getData(): Promise<Lesson[]> {
  // Fetch data from your API here.
  return getLessons();
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable data={data} columns={columns} />
    </div>
  );
}
