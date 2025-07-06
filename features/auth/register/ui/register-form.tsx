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
import { registerSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { register } from "../api/register";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      login: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      await register(values);
    } catch (error) {}
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ник Minecraft</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button>Зарегистрироваться</Button>
        <p>
          Уже есть аккаунт?{" "}
          <Link className="underline" href={"/auth/login"}>
            Войти
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
