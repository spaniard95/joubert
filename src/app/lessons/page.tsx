import { Lesson } from "@/types";
import { DataTable } from "../(components)";
import { columns } from "../(components)/custom-table/columns"; // fix this

async function getData(): Promise<Lesson[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      title: "Algebra Introduction",
      category: "MATH",
      grade: "3",
    },
    {
      id: "2",
      title: "Geometry Basics",
      category: "MATH",
      grade: "6",
    },
    {
      id: "3",
      title: "Understanding Fractions",
      category: "MATH",
      grade: "3",
    },
    {
      id: "4",
      title: "Multiplication Principles",
      category: "MATH",
      grade: "3",
    },
    {
      id: "5",
      title: "Division Techniques",
      category: "MATH",
      grade: "4",
    },
    {
      id: "6",
      title: "The World of Numbers",
      category: "MATH",
      grade: "5",
    },
    {
      id: "7",
      title: "Advanced Algebra",
      category: "MATH",
      grade: "6",
    },
    {
      id: "8",
      title: "Geometry and Shapes",
      category: "MATH",
      grade: "4",
    },
    {
      id: "9",
      title: "Trigonometry Intro",
      category: "MATH",
      grade: "6",
    },
    {
      id: "10",
      title: "Calculus Fundamentals",
      category: "MATH",
      grade: "7",
    },
    {
      id: "11",
      title: "Probability Concepts",
      category: "MATH",
      grade: "5",
    },
    {
      id: "12",
      title: "Statistics Overview",
      category: "MATH",
      grade: "6",
    },
    {
      id: "13",
      title: "Mathematical Puzzles",
      category: "MATH",
      grade: "3",
    },
    {
      id: "14",
      title: "Linear Equations",
      category: "MATH",
      grade: "5",
    },
    {
      id: "15",
      title: "Quadratic Equations",
      category: "MATH",
      grade: "6",
    },
    {
      id: "16",
      title: "Graphs and Functions",
      category: "MATH",
      grade: "6",
    },
    {
      id: "17",
      title: "Math in Real Life",
      category: "MATH",
      grade: "4",
    },
    {
      id: "18",
      title: "Exploring Measurements",
      category: "MATH",
      grade: "3",
    },
    {
      id: "19",
      title: "Understanding Decimals",
      category: "MATH",
      grade: "4",
    },
    {
      id: "20",
      title: "Introduction to Ratios",
      category: "MATH",
      grade: "3",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable data={data} columns={columns} />
    </div>
  );
}
