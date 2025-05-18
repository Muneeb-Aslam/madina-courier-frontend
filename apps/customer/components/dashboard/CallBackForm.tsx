"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@repo/ui/form";

import Button from "@repo/ui/button";
const CallBackForm = () => {
  const formMethods = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { control, handleSubmit } = formMethods;

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex justify-center  w-full">
      <div className="flex flex-col items-center m-2 sm:m-10 md:m-20 md:flex md:flex-row md:12 sm:justify-center gap-4 p-6 bg-[#EBF6F2]">
        <div className="flex flex-col justify-center  items-start text-white">
          <div className="flex flex-col justify-center items-center mb-4">
            <Image src="/callback.svg" alt="logo" width={150} height={100} />
            <div className="text-lg font-semibold mt-2 text-primary">
              Request a CALLBACK
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl text-black">
              We will contact in the shortest time
            </div>
            <div className="text-gray-400">Monday to Friday, 9am - 5pm.</div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="bg-[#EBF6F2] p-4 rounded-[2px] w-full max-w-md">
          <Form {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <FormField
                name="name"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Your Name"
                      />
                    </FormControl>
                    {/* <FormDescription>Enter your full name.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                name="email"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="you@example.com"
                      />
                    </FormControl>
                    {/* <FormDescription>Enter your email address.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                name="message"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Message</FormLabel> */}
                    <FormControl>
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Type your message here..."
                      />
                    </FormControl>
                    {/* <FormDescription>
                    Briefly describe your request.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-primary rounded-[4px] text-white px-4 py-2"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CallBackForm;
