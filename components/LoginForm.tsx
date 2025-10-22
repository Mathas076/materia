import { CustomButton } from '@/components/ui/CustomButton';
import CustomText from "@/components/ui/CustomText"
import { TextInput, View } from "react-native";
import { useState } from 'react';
import { z } from 'zod';
import { loginSchema } from '@/lib/schemas/TextSchema';

export function LoginForm({ onLoginPress, isDisabled = true }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // opcional si quieres validar contraseña después
  const [error, setError] = useState<string | null>(null);

  const handleLoginPress = () => {
    // Validar con Zod 

    const result = loginSchema.safeParse({ email });
    if (!result.success) {
      // Mostrar error
      setError(result.error.errors[0].message);
    } else {
      setError(null);
      onLoginPress();
    }
  };

  return (
    <>
      <CustomText variant='large'>Inicia sesion!</CustomText>
      <CustomText variant='medium'>Ingresa tus datos para acceder a nuestra app!</CustomText>
          
      <TextInput
        className='bg-white text-black rounded-lg p-3 w-full border border-black'
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />{/*
      <TextInput
        className='bg-white text-black rounded-lg p-3 w-full border border-black'
        placeholder='Contraseña'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />*/}

      {error && <CustomText variant='small'>{error}</CustomText>}

      <View className='flex-row gap-2'>
        <CustomButton 
        variant='primary'
        onPress={handleLoginPress}
        >
          Iniciar sesión
        </CustomButton>
      </View>
    </>
  );
}