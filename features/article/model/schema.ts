import { ArticleCategory } from "@/entities/article/model/enums";
import z from "zod";

export const articleSchema = z.object({
  title: z.string().min(1, "Заголовок обязателен"),
  text: z.string().min(1, "Текст обязателен"),
  type: z.nativeEnum(ArticleCategory),
});
