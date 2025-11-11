import { CustomButton } from '@/components/ui/CustomButton';
import CustomText from "@/components/ui/CustomText";
import { TextInput, View, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { registerSchema } from '@/lib/schemas/RegisterSchema';

export function RegisterForm({ onRegisterPress, onLoginPress }: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegisterPress = () => {
    const result = registerSchema.safeParse({
      email,
      username,
      password,
      confirmPassword
    });

    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError(null);
      onRegisterPress();
    }
  };

  return (
    <>
      <CustomText variant='large'>Crea tu cuenta</CustomText>
      <CustomText variant='medium'>Ingresa tus datos para registrarte</CustomText>

      {/* Email */}
      <TextInput
        className='bg-white text-black rounded-lg p-3 w-full border border-black mt-3'
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      {/* Nombre de usuario */}
      <TextInput
        className='bg-white text-black rounded-lg p-3 w-full border border-black mt-3'
        placeholder='Nombre de usuario'
        value={username}
        onChangeText={setUsername}
        autoCapitalize='none'
      />

      {/* Contraseña */}
      <TextInput
        className='bg-white text-black rounded-lg p-3 w-full border border-black mt-3'
        placeholder='Contraseña'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirmar contraseña */}
      <TextInput
        className='bg-white text-black rounded-lg p-3 w-full border border-black mt-3'
        placeholder='Confirmar contraseña'
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {error && (
        <CustomText variant='small'>
          {error}
        </CustomText>
      )}

      <View className='flex-row gap-2 mt-4'>
        <CustomButton 
          variant='primary'
          onPress={handleRegisterPress}
        >
          Registrarse
        </CustomButton>
      </View>

      {/* Texto para volver al login */}
      <View className='flex-row items-center mt-4'>
        <CustomText variant='small'>¿Ya tienes una cuenta? </CustomText>

        <TouchableOpacity onPress={onLoginPress}>
          <CustomText variant='small'>
            Iniciar sesión
          </CustomText>
        </TouchableOpacity>
      </View>
    </>
  );
}
