'use server';

import prisma from '@/lib/prisma';
import { EmailJsType } from '@/types/emailjs.type';

export async function createSendEmail(data: EmailJsType) {
    try {
        const result = await prisma.sendcontact.create({
            data: {
                "name": data.name,
                "subject": data.subject,
                "email": data.email,
                "message": data.message,
            }
        })
        return result;
    } catch (error: any) {
        throw new Error(error.message)
    }
}
