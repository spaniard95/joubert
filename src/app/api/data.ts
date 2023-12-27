import { BasicLesson, Semester, Teacher } from "@/types";

export const lessons: Array<BasicLesson> = [
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

export const teachers: Array<Teacher> = [
  {
    id: "1",
    name: "Mr. Smith",
    email: "smith@email.com",
    
  },
  {
    id: "2",
    name: "Dr. Johnson",
    email: "johnson@email.com",
  },
  {
    id: "3",
    name: "Professor Clarke",
    email: "clarke@email.com",
   
  },
  {
    id: "4",
    name: "Ms. Davis",
    email: "davis@email.com",
    
  },
  {
    id: "5",
    name: "Dr. Lopez",
    email: "lopez@email.com",
    
  },
  {
    id: "6",
    name: "Ms. Taylor",
    email: "taylor@email.com",
    
  },
  {
    id: "7",
    name: "Mr. Martinez",
    email: "martinez@email.com",
  
  },
];

export const semesters: Array<Semester> = [
  {
    id: "1",
    year: 2021,
    season: "spring",
    lessons: [
      {
        id: "1",
        title: "Algebra Introduction",
        category: "math",
        grade: "3",
        teachers: [1],
        dateOfExam: "2021-04-01",
        schedule: [
          {
            date: "2021-01-01",
            time: "10:00",
            classroom: "A1",
          },
          {
            date: "2021-01-08",
            time: "10:00",
            classroom: "A1",
          },
          {
            date: "2021-01-15",
            time: "10:00",
            classroom: "A1",
          },
        ],
      },
      {
        id: "2",
        title: "Algebra fdsfa",
        category: "math",
        grade: "3",
        teachers: [1],
        dateOfExam: "2021-04-01",
        schedule: [
          {
            date: "2021-01-01",
            time: "10:00",
            classroom: "A1",
          },
          {
            date: "2021-01-08",
            time: "10:00",
            classroom: "A1",
          },
          {
            date: "2021-01-15",
            time: "10:00",
            classroom: "A1",
          },
        ],
      },
    ],
  },
];
