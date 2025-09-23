import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters long"),
});
