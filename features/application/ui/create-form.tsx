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
import { applicationSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { useCreateApplication } from "@/entities/application/model/use-applications";

interface CreateApplicationFormProps {
  onSuccess?: () => void;
}

const CreateApplicationForm = ({ onSuccess }: CreateApplicationFormProps) => {
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      text: "",
    },
  });

  const createApplicationMutation = useCreateApplication();

  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    try {
      await createApplicationMutation.mutateAsync(values);
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
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Текст заявки</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full text-sm"
                  placeholder="Опишите РП персонажа за которого будете играть на сервере"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={createApplicationMutation.isPending}
        >
          {createApplicationMutation.isPending ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateApplicationForm;
