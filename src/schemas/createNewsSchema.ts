import { z } from "zod";

export const newsValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  summary: z.string().min(1, "Summary is required"),
  image: z.record(z.any()).optional(),
  content: z.string().min(1, "Content is required"),
  categoryId: z.string().uuid(),
});