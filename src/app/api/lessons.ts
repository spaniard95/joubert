import { Lesson } from "@/types";

const lessons: Array<Lesson> = [
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
  {
    id: "7",
    title: "Advanced Algebra",
    category: "math",
    grade: "6",
  },
  {
    id: "8",
    title: "Geometry and Shapes",
    category: "math",
    grade: "4",
  },
  {
    id: "9",
    title: "Trigonometry Intro",
    category: "math",
    grade: "6",
  },
  {
    id: "10",
    title: "Calculus Fundamentals",
    category: "math",
    grade: "7",
  },
  {
    id: "11",
    title: "Probability Concepts",
    category: "science",
    grade: "5",
  },
  {
    id: "12",
    title: "Statistics Overview",
    category: "math",
    grade: "6",
  },
  {
    id: "13",
    title: "Mathematical Puzzles",
    category: "math",
    grade: "3",
  },
  {
    id: "14",
    title: "Linear Equations",
    category: "math",
    grade: "5",
  },
  {
    id: "15",
    title: "Quadratic Equations",
    category: "math",
    grade: "6",
  },
  {
    id: "16",
    title: "Graphs and Functions",
    category: "math",
    grade: "6",
  },
  {
    id: "17",
    title: "Introduction to Biology",
    category: "science",
    grade: "7",
  },
  {
    id: "18",
    title: "Cell Structure and Function",
    category: "advanced biology",
    grade: "8",
  },
  {
    id: "19",
    title: "Genetics and Heredity",
    category: "heath",
    grade: "9",
  },
  {
    id: "20",
    title: "Ecology and Ecosystems",
    category: "biology",
    grade: "10",
  },
];

const getLessons = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return lessons;
};

export { getLessons };
