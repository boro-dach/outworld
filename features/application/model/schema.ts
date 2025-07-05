import z from "zod";

export const applicationSchema = z.object({
  text: z
    .string()
    .min(1, "Текст заявки обязателен")
    .max(500, "Текст заявки не должен превышать 500 символов"),
});
