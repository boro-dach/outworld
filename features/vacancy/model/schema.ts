import {
  Jobs,
  PaymentPeriod,
  SalaryType,
} from "@/entities/vacancy/model/schema";
import z from "zod";

export const salarySchema = z
  .object({
    type: z.nativeEnum(SalaryType),
    period: z.nativeEnum(PaymentPeriod),

    fixedAmount: z.number().positive().optional(),
    minAmount: z.number().positive().optional(),
    maxAmount: z.number().positive().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === SalaryType.FIXED) {
      if (data.fixedAmount === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Для фиксированной оплаты необходимо указать сумму",
          path: ["fixedAmount"],
        });
      }
    }

    if (data.type === SalaryType.RANGE) {
      if (data.minAmount === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Для диапазона необходимо указать минимальную сумму",
          path: ["minAmount"],
        });
      }
      if (data.maxAmount === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Для диапазона необходимо указать максимальную сумму",
          path: ["maxAmount"],
        });
      }
      if (
        data.minAmount !== undefined &&
        data.maxAmount !== undefined &&
        data.minAmount >= data.maxAmount
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Минимальная сумма должна быть меньше максимальной",
          path: ["minAmount"],
        });
      }
    }
  });

export const vacancySchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(20),
  occupation: z.nativeEnum(Jobs),
  salary: salarySchema,
});
