import z from "zod";

export const academicSemesterSchema = z.object({
  name: z.string("Please select a Name"),
  year: z.string("Please select a Year"),
  startMonth: z.string("Please select a StartMonth"),
  endMonth: z.string("Please select a EndMonth"),
});
