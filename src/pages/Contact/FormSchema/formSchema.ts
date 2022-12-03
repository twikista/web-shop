import { z } from "zod";

export const formSchema = z.object({
  subject: z.string().min(1, { message: "subject is required" }),
  firstName: z.string().min(1, { message: "first name is required" }),
  lastName: z.string().min(1, { message: "last name is required" }),
  email: z
    .string()
    .min(1, { message: "E-mail is required" })
    .email({ message: `enter a valid email address` }),
  message: z.string().min(1, { message: "message is required" }),
});

export type FormType = z.infer<typeof formSchema>;
