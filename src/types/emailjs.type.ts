import { z } from 'zod';

export type EmailJsType = z.infer<typeof EmailJsSchema>

export const EmailJsSchema = z.object({
    name: z.string().min(1, { message: "กรุณากรอกชื่อ" }).trim(),
    subject: z.string().min(1, { message: "กรุณากรอกชื่อเรื่อง" }).trim(),
    email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง").trim().toLowerCase().max(50, { message: "กรุณากรอกอีเมล ไม่เกิน 50 ตัวอักษร" }),
    message: z.string().min(1, { message: "กรุณากรอกรายละเอียด" }).trim(),
});

export const defaultEmailJs = {
    name: "",
    subject: "",
    email: "",
    message: "",
};

