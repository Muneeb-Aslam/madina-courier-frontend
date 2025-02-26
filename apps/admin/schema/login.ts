import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email()
    .refine((value) => value, "Email is required"),
  password: z.string().refine((value) => value, "Pasword is required"),
});
