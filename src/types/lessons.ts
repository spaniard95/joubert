export type CuricilumLesson = {
  id: string; // should it be a number?
  title: string;
  category: string;
  grade?: string;
};

export type SemestersLesson = CuricilumLesson & {
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
  lessons: Number[];
};

export type Semester = {
  id: string;
  year: number;
  season: string;
  lessons: SemestersLesson[];
};
