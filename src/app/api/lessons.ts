import { lessons, semesters, teachers } from "./data";

const getLessons = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return lessons;
};

const getTeachers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return teachers;
};

const getSemester = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return semesters[0];
};

export { getLessons, getTeachers, getSemester };
