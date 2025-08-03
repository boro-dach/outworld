import { z } from "zod";

export enum Jobs {
  BANKER = "BANKER",
  BUSINESSMAN = "BUSINESSMAN",
  JOURNALIST = "JOURNALIST",
  OTHER = "OTHER",
}

export enum SalaryType {
  FIXED = "FIXED",
  RANGE = "RANGE",
}

export enum PaymentPeriod {
  PER_TASK = "PER_TASK",
  PER_HOUR = "PER_HOUR",
  PER_DAY = "PER_DAY",
  PER_WEEK = "PER_WEEK",
  PER_MONTH = "PER_MONTH",
}

const createSalarySchema = z
  .object({
    type: z.nativeEnum(SalaryType),
    period: z.nativeEnum(PaymentPeriod),
    fixedAmount: z.number().positive().optional(),
    minAmount: z.number().positive().optional(),
    maxAmount: z.number().positive().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === SalaryType.FIXED) {
      if (typeof data.fixedAmount !== "number") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Fixed amount is required for FIXED salary type.",
          path: ["fixedAmount"],
        });
      }
      if (data.minAmount !== undefined || data.maxAmount !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "minAmount and maxAmount should not be provided for FIXED salary type.",
          path: ["type"],
        });
      }
    }

    if (data.type === SalaryType.RANGE) {
      if (typeof data.minAmount !== "number") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Minimum amount is required for RANGE salary type.",
          path: ["minAmount"],
        });
      }
      if (typeof data.maxAmount !== "number") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Maximum amount is required for RANGE salary type.",
          path: ["maxAmount"],
        });
      }
      if (data.fixedAmount !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "fixedAmount should not be provided for RANGE salary type.",
          path: ["type"],
        });
      }
      if (
        typeof data.minAmount === "number" &&
        typeof data.maxAmount === "number" &&
        data.maxAmount < data.minAmount
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Максимальная зарплата не может быть меньше чем минимальная.",
          path: ["maxAmount"],
        });
      }
    }
  });

export const createVacancySchema = z.object({
  title: z
    .string()
    .min(
      5,
      "Название вакансии слишком короткое. Минимальная длинна 5 символов."
    )
    .max(
      100,
      "Название вакансии слишком длинное. Максимальная длинна 100 символов."
    ),
  description: z
    .string()
    .min(
      20,
      "Описание вакансии слишком короткое. Минимальная длинна 20 символов."
    ),
  occupation: z.nativeEnum(Jobs, {
    errorMap: () => ({ message: "Invalid occupation type." }),
  }),
  salary: createSalarySchema,
});

export type CreateVacancyDto = z.infer<typeof createVacancySchema>;
export type CreateSalaryDto = z.infer<typeof createSalarySchema>;
