import z from "zod";

export const depositSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^\d{8}$/, "Номер карты должен состоять ровно из 8 цифр"),

  amount: z
    .number()
    .min(1, "Слишком маленькая сумма")
    .positive("Введите положительную сумму")
    .refine((val) => Number.isInteger(val), {
      message: "Сумма должна быть целым числом",
    }),
});

export const withdrawSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^\d{8}$/, "Номер карты должен состоять ровно из 8 цифр"),

  amount: z
    .number()
    .min(1, "Слишком маленькая сумма")
    .positive("Введите положительную сумму")
    .refine((val) => Number.isInteger(val), {
      message: "Сумма должна быть целым числом",
    }),
});
