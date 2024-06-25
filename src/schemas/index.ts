import * as z from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

export const registerSchema = loginSchema.extend({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
})