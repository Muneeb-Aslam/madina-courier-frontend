"use client";
import React, { useState } from "react";
import Button from "@repo/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "@repo/ui/input";
import { DataTable } from "@repo/ui/dataTable";
import { userColumns } from "./userColumns";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@repo/ui/form";
import { addUserSchema } from "@/schema";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/dialog";

const UserPage = () => {
  type User = {
    id: string;
    userName: string;
    email: string;
    phone: string;
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const form = useForm<z.infer<typeof addUserSchema>>({
    resolver: zodResolver(addUserSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const handleAddUser = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    reset();
  };

  const onSubmit = (values: z.infer<typeof addUserSchema>) => {
    setUsers([...users, { id: (users.length + 1).toString(), ...values }]);
    setOpenDialog(false);
    reset();
  };

  return (
    <div className="">
      <div className="flex w-full  justify-between p-4 mr-3 ml-3 ">
        <h1 className="text-5xl font-bold text-green-800 ">Users</h1>

        <Button type="submit" className="self-center" onClick={handleAddUser}>
          Add Users
        </Button>
      </div>
      <div>
        <div className=" text-2xl font-bold text-green-800 mt-5 ">
          User List
        </div>
        <div>
          <DataTable columns={userColumns} data={users} />
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <div />
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">Add New User</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full mt-spacing-md flex flex-col gap-spacing-l">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter User Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between mt-4 w-full">
                <Button type="submit">Add User</Button>
                <Button type="button" onClick={handleCloseDialog}>
                  Close
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserPage;
