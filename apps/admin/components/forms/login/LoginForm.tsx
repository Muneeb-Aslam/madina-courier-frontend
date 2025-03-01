"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Input from "@repo/ui/input";
import Button from "@repo/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@repo/ui/form";
import { loginFormSchema } from "@/schema";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-spacing-xl shadow-2xl rounded-xl h-max w-[25rem] bg-white flex flex-col justify-start items-start gap-spacing-m"
      >
        <div className="w-full flex flex-col gap-spacing-xxs">
          <p className="text-2xl font-bold text-black">Login</p>
          <p className="text-md text-black">
            Enter your email and password to login
          </p>
        </div>
        <div className="w-full mt-spacing-md flex flex-col gap-spacing-l">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="self-center mt-spacing-m">
          Log In
        </Button>
      </form>
    </Form>
  );
}
