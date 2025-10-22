import {LoginForm} from "@/components/LoginForm";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center"
    >
      <LoginForm onLoginPress={() => console.log("Login pressed")}></LoginForm>
    </View>
  );
}
