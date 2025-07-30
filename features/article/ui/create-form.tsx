"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { articleSchema } from "../model/schema";
import { Input } from "@/shared/ui/input";
import { useCreateArticle } from "@/entities/article/model/use-articles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { ArticleCategory } from "@/entities/article/model/enums";

interface CreateArticleFormProps {
  onSuccess?: () => void;
}

const CreateArticleForm = ({ onSuccess }: CreateArticleFormProps) => {
  const form = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const createArticleMutation = useCreateArticle();

  async function onSubmit(values: z.infer<typeof articleSchema>) {
    try {
      await createArticleMutation.mutateAsync(values);
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Submission error:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4 flex flex-col w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Заголовок новости</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Текст новости</FormLabel>
              <FormControl>
                <Textarea {...field} className="!min-h-64" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-full md:w-64">
              <FormLabel className="text-lg">Категория</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите категорию новости" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="w-full">
                  <SelectItem value={ArticleCategory.WEBSITE}>Сайт</SelectItem>
                  <SelectItem value={ArticleCategory.SERVER}>Сервер</SelectItem>
                  <SelectItem value={ArticleCategory.TECH}>
                    Тех. Часть
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button
          className="w-full cursor-pointer"
          type="submit"
          disabled={createArticleMutation.isPending}
        >
          {createArticleMutation.isPending ? "Создание..." : "Создать"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateArticleForm;
