"use server"

import axios from "axios"

export async function verifyCaptcha(token: string | null) {
  try {
    const res: any = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    )
    if (res.data.success) {
      console.log('success!!!')
      return ("success!")
    } else {
      throw new Error("Failed Captcha")
    }
  } catch (error: any) {
    console.log(error.message)

  }
}

