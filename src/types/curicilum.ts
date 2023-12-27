import { Category } from "./lessons";

// WIP
export type CuricilumMajor = {
  id: string;
  name: string;
  requirements: Array<{
    categoryId: string; // ex. 2-> ipoxreotiko
    limit: number; // ex. 14
    isRequired: boolean; // ex. true means equal to 14
  }>;
};

export type Curicilum = {
  id: string;
  startYear?: number;
  endYear?: number;
  majors: Array<CuricilumMajor>;
  categories: Category[];
  lessons: any;
};
