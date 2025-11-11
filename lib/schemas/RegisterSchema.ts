import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'El campo email es obligatorio' })
      .email({ message: 'Revisa el formato del email' }),

    username: z
      .string()
      .min(1, { message: 'El nombre de usuario es obligatorio' })
      .regex(/^\S+$/, { message: 'El nombre de usuario no debe tener espacios' }),

    password: z
      .string()
      .min(1, { message: 'La contraseña es obligatoria' })
      .regex(/[A-Z]/, { message: 'La contraseña debe contener uan letra mayuscula' })
      .regex(/[0-9]/, { message: 'La contraseña debe contener un numero' }),

    confirmPassword: z
      .string()
      .min(1, { message: 'Debes confirmar tu contraseña' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type RegisterType = z.infer<typeof registerSchema>;
