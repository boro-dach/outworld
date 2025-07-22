import z from "zod";

export const bankcardSchema = z.object({
  title: z
    .string()
    .min(1, "Введите название карты")
    .max(16, "Название карты не должно превышать 16 символов"),
  cardNumber: z
    .string()
    .regex(/^\d{8}$/, "Номер карты должен состоять ровно из 8 цифр"),
});

export const sendSchema = z.object({
  fromCard: z
    .string()
    .regex(/^\d{8}$/, "Номер карты должен состоять ровно из 8 цифр"),
  toCard: z
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
