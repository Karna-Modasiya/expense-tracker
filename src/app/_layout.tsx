import { Stack } from "expo-router";
import AuthProvider from "../providers/AuthProvider";
import "../../global.css";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ToastProvider
        placement="bottom"
        duration={2500}
        animationType="slide-in"
        successColor="#22c55e"
        dangerColor="#ef4444"
        warningColor="#f59e0b"
        normalColor="#333"
      >
        <Stack screenOptions={{ headerShown: false }} />
      </ToastProvider>
    </AuthProvider>
  );
}
