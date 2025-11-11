import { useState } from "react";
import { View } from "react-native";
import "@/global.css";

import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";

export default function Index() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <View className="bg-blue-500 flex-1 justify-center items-center p-4 w-full">
      {isRegistering ? (
        <RegisterForm
          onRegisterPress={() => console.log("Register pressed")}
          onLoginPress={() => setIsRegistering(false)}  
        />
      ) : (
        <LoginForm
          onLoginPress={() => console.log("Login pressed")}
          onRegisterPress={() => setIsRegistering(true)} 
        />
      )}
    </View>
  );
}
