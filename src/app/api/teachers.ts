import { Teacher } from "@/types";

const teachers: Array<Teacher> = [
  {
    id: "1",
    name: "John Doe",
    email: "JohnDoe@email.com",
    lessons: [
      {
        id: "1",
        title: "Algebra Introduction",
        category: "math",
        grade: "3",
      },
      {
        id: "2",
        title: "Geometry Basics",
        category: "math",
        grade: "6",
      },
      {
        id: "3",
        title: "Understanding Fractions",
        category: "math",
        grade: "3",
      },
    ],
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "JaneDoe@email.com",
    lessons: [
      {
        id: "4",
        title: "Multiplication Principles",
        category: "science",
        grade: "3",
      },
      {
        id: "5",
        title: "Division Techniques",
        category: "math",
        grade: "4",
      },
      {
        id: "6",
        title: "The World of Numbers",
        category: "math",
        grade: "5",
      },
    ],
  },
];

const getTeachers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return teachers;
};

export { getTeachers };
