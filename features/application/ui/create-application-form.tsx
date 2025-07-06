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
import { createApplication } from "@/entities/application/api/create";

interface AddCategoryFormProps {
  onSuccess?: () => void;
}

const CreateApplicationForm = ({ onSuccess }: AddCategoryFormProps) => {
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    try {
      createApplication(values);
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
        ></FormField>
        <Button className="w-full">Отправить</Button>
      </form>
    </Form>
  );
};

export default CreateApplicationForm;
