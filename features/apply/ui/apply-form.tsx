"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import { useApplyToVacancy } from "@/entities/apply/model/use-applies";
import { applySchema } from "../model/schema";

interface CreateApplyFormProps {
  onSuccess?: () => void;
  vacancyId: string;
}

const CreateApplyForm = ({ onSuccess, vacancyId }: CreateApplyFormProps) => {
  const form = useForm<z.infer<typeof applySchema>>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      coverLetter: "",
    },
  });

  const createApplyMutation = useApplyToVacancy();

  async function onSubmit(values: z.infer<typeof applySchema>) {
    // ШАГ 1: Проверка на наличие vacancyId.
    if (!vacancyId) {
      console.error("vacancyId отсутствует! Невозможно отправить форму.");
      // Здесь можно показать ошибку пользователю
      return;
    }

    // ШАГ 2: Явно создаем объект для отправки.
    const dataToSend = {
      ...values,
      vacancyId: vacancyId,
    };

    // ШАГ 3 (ОТЛАДКА): Выводим в консоль то, что собираемся отправить.
    // Посмотрите в консоли браузера, есть ли здесь vacancyId.
    console.log("Отправляем на бэкенд:", dataToSend);

    try {
      // ШАГ 4: Выполняем мутацию с подготовленным объектом.
      await createApplyMutation.mutateAsync(dataToSend);
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Ошибка при отклике на вакансию:", error);
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
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                Напишите сопроводительное письмо (по желанию)
              </FormLabel>
              <FormControl>
                <Textarea className="!min-h-32" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={createApplyMutation.isPending}
        >
          {createApplyMutation.isPending ? "Откликаемся..." : "Откликнуться"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateApplyForm;
