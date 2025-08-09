import z from "zod";

export const applySchema = z.object({
  coverLetter: z.string().min(20).or(z.literal("")).optional(),
});
