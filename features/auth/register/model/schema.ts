import z from "zod";

export const registerSchema = z.object({
  login: z.string().min(1, "Ник minecraft обязателен"),
  email: z.string().email("Введите корректную почту"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});
