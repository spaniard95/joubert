export type BasicLesson = {
  id: string; // should it be a number?
  title: string;
  category: string;
  grade?: string;
};

export type SemesterLesson = BasicLesson & {
  teachers: Number[];
  dateOfExam?: string;
  schedule?: Array<{
    date: string;
    time: string; // maybe Date type in the future?
    classroom: string;
  }>;
};

export type Teacher = {
  id: string;
  name: string;
  email: string;
  lessons?: BasicLesson[];
};

export type Category = {
  id: string;
  label: string;
  value: string;
};

export type Semester = {
  id: string;
  year: number;
  season: string;
  lessons: SemesterLesson[];
};
