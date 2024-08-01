'use server'

import { createSendEmail } from '@/server/actions/emailJs';
import { EmailJsSchema, EmailJsType } from '@/types/emailjs.type';
import { NextResponse } from 'next/server';

function validateSchema(data: EmailJsType) {
    try {
        const parseData = EmailJsSchema.parse(data);
        return parseData;
    } catch (error: any) {
        if (error.issues && error.issues.length > 0) {
            const validationErrors = error.issues.map((issue: any) => ({
                path: issue.path.join('.'),
                message: issue.message
            }))

            throw new Error(JSON.stringify(validationErrors))
        }
        throw new Error(error.message)
    }
}

export async function POST(request: Request) {
    try {
        const json: EmailJsType = await request.json();
        const jsonValidated = validateSchema(json);
        // const createSendcontactResult = await createSendEmail(jsonValidated);

        // return NextResponse.json({ status: 200, results: createSendcontactResult });
        return NextResponse.json({ status: 200, results: "Success" });

    } catch (error: any) {
        let errorMessage;
        try {
            errorMessage = JSON.parse(error.message)
        } catch (parseError) {
            errorMessage = error.message
        }
        return NextResponse.json({ status: 500, results: errorMessage })
    }
}
