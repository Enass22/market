import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "name must be at least 3 charcters")
      .max(10, "name must be at most 10 charcters")
      .min(1, "name is required"),
    email: z
      .string()
      .min(1, "email is required")
      .pipe(z.email("invalid email")),
    password: z
      .string()
      .min(1, "password is required")
      .min(6, "password must be at least 6 characters"),
    rePassword: z.string().min(1, "rePassword is required"),
    phone: z
      .string()
      .min(1, "phone is required")
      .regex(/^[0-9]{10}$/, "invalid phone number"),
  })
  .refine((object) => object.password === object.rePassword, {
    message: "passwords do not match",
    path: ["rePassword"],
   
  });

  export type registerSchemaType = z.infer<typeof registerSchema>;