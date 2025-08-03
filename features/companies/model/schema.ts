import z from "zod";

export const companySchema = z.object({
  title: z
    .string()
    .min(1, { message: "Название не может быть пустым" })
    .max(24, { message: "Название не может превышать 24 символа" }),
  description: z
    .string()
    .min(1, { message: "Описание не может быть пустым" })
    .max(64, { message: "Описание не может превышать 64 символа" }),
  payCard: z
    .string()
    .regex(/^\d{8}$/, "Номер карты должен состоять ровно из 8 цифр"),
});
