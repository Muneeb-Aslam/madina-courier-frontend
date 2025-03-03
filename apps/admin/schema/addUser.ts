import { z } from "zod";

export const addUserSchema = z.object({
  userName: z.string().min(1, { message: "User Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number should be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone number should only contain digits" }),
});
