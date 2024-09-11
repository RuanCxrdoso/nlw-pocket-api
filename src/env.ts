import * as zod from 'zod'

const envSchema = zod.object({
  DATABASE_URL: zod.string().url(),
})

export const env = envSchema.parse(process.env) // Verify and parse the environment variables