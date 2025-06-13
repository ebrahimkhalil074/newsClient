import { z } from "zod";

export const videoValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  videoUrl: z.string().min(1, "videoUrl is required"),
  description: z.string().min(1, "description is required"),
  categoryId: z.string().uuid(),
});