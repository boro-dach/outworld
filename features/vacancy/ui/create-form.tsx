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
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { vacancySchema } from "../model/schema";
import {
  Jobs,
  PaymentPeriod,
  SalaryType,
} from "@/entities/vacancy/model/schema";
import { useCreateVacancy } from "@/entities/vacancy/model/use-vacancies";
import { Textarea } from "@/shared/ui/textarea";

interface CreateVacancyFormProps {
  onSuccess?: () => void;
  companyId: string;
}

const CreateVacancyForm = ({
  onSuccess,
  companyId,
}: CreateVacancyFormProps) => {
  const form = useForm<z.infer<typeof vacancySchema>>({
    resolver: zodResolver(vacancySchema),
    defaultValues: {
      title: "",
      description: "",
      occupation: Jobs.OTHER,
      salary: {
        type: SalaryType.FIXED,
        period: PaymentPeriod.PER_MONTH,
        fixedAmount: undefined,
        minAmount: undefined,
        maxAmount: undefined,
      },
    },
  });

  const salaryType = useWatch({
    control: form.control,
    name: "salary.type",
  });

  const createVacancyMutation = useCreateVacancy();

  async function onSubmit(values: z.infer<typeof vacancySchema>) {
    try {
      const dataToSend = {
        ...values,
        companyId: companyId,
      };

      if (dataToSend.salary.type === SalaryType.FIXED) {
        delete dataToSend.salary.minAmount;
        delete dataToSend.salary.maxAmount;
      } else if (dataToSend.salary.type === SalaryType.RANGE) {
        delete dataToSend.salary.fixedAmount;
      }

      await createVacancyMutation.mutateAsync(dataToSend);

      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Ошибка при создании вакансии:", error);
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
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea className="!min-h-64" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип занятости</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип занятости" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={Jobs.BANKER}>Банкир</SelectItem>
                  <SelectItem value={Jobs.JOURNALIST}>Журналист</SelectItem>
                  <SelectItem value={Jobs.OTHER}>Другое</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary.type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип зарплаты</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={SalaryType.FIXED}>
                    Фиксированная
                  </SelectItem>
                  <SelectItem value={SalaryType.RANGE}>Диапазон</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {salaryType === SalaryType.FIXED && (
          <FormField
            control={form.control}
            name="salary.fixedAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Сумма</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {salaryType === SalaryType.RANGE && (
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="salary.minAmount"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>От</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(+e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary.maxAmount"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>До</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(+e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <FormField
          control={form.control}
          name="salary.period"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Период оплаты</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите период" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={PaymentPeriod.PER_HOUR}>В час</SelectItem>
                  <SelectItem value={PaymentPeriod.PER_DAY}>В день</SelectItem>
                  <SelectItem value={PaymentPeriod.PER_WEEK}>
                    В неделю
                  </SelectItem>
                  <SelectItem value={PaymentPeriod.PER_MONTH}>
                    В месяц
                  </SelectItem>
                  <SelectItem value={PaymentPeriod.PER_TASK}>
                    За задачу
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full"
          type="submit"
          disabled={createVacancyMutation.isPending}
        >
          {createVacancyMutation.isPending ? "Создаём..." : "Создать"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateVacancyForm;
