/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import dotenv from 'dotenv'
dotenv.config()

interface configTypes {

  BACKEND_ENDPOINT: string
}

export const config: configTypes = {

  /*   BACKEND_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT ?? 'http://localhost:8989' */
  BACKEND_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT ?? 'https://askmark.onrender.com'
}
