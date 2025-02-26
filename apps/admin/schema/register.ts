import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
