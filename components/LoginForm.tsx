import { CustomButton } from '@/components/ui/CustomButton';
import CustomText from "@/components/ui/CustomText"
import { TextInput, View } from "react-native";

type LoginFormProps = {
  onLoginPress: () => void;
  isDisabled?: boolean;
}

export function LoginForm({ onLoginPress, isDisabled = true }: LoginFormProps) {
  return (
    <>
      <CustomText variant='large' >Inicia sesion!</CustomText> 
      <CustomText variant='medium'>Ingresa tus datos para acceder a nuestra app!</CustomText>
      
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Email/Usuario' 
      />
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Contraseña' 
        secureTextEntry 
      />
      
      <View className='flex-row gap-2'>
        <CustomButton 
          onPress={onLoginPress} 
          variant={isDisabled ? 'link' : 'secondary'}
        >
          Iniciar sesión
        </CustomButton>
        
      </View>
    </>
  );
}