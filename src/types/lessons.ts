export type Lesson = {
  id: string; // should it be a number?
  title: string;
  category: string;
  grade: string;
};

export type Teacher = {
  id: string;
  name: string;
  email: string;
  lessons: Lesson[];
};
