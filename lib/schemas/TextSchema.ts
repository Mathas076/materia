import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'El campo email es obligatorio' })
    .email({ message: 'Revisa el formato del email' }),
});

export type LoginType = z.infer<typeof loginSchema>;