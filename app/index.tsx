import {LoginForm} from "@/components/LoginForm";
import { Text, View } from "react-native";
import "@/global.css";

export default function Index() {
  return (
    <View  className="bg-blue-500 flex-1 justify-center items-center"
    >
      <LoginForm onLoginPress={() => console.log("Login pressed")}></LoginForm>
    </View>
  );
}
