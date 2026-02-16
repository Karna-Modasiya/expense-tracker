import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  AppState,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { ExpenseTrackerIllustration } from "../../icons/ExpenseIllustration";
import { supabase } from "~/src/lib/supabase";
import { useAppToast } from "~/src/utils/ShowToast";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useAppToast();

  const handleSignIn = async() => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) showToast(error.message, "danger");
    setLoading(false);
  };

  const handleSignUp = async () => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) showToast(error.message, "danger");
    if (!session) showToast("Please check your inbox for email verification!", "danger");
    setLoading(false);
  };

  const handleForgotPassword = (): void => {
    console.log("Forgot password pressed");
    // Navigate to forgot password screen
  };

  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#4f46e5", "#6366f1", "#818cf8"]}
        className="flex-1"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, padding: 20 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View className="items-center mt-10 mb-5">
              <Text className="text-3xl font-bold text-white mb-2 tracking-wide">
                Expense Tracker
              </Text>
              <Text className="text-base text-indigo-100 opacity-90">
                Manage your finances with ease
              </Text>
            </View>

            <View className="items-center my-5">
              <ExpenseTrackerIllustration />
            </View>

            {/* Login Form Card */}
            <View className="mt-5">
              <View className="bg-white rounded-3xl p-6 shadow-2xl">
                <Text className="text-2xl font-bold text-slate-800 mb-1">
                  Welcome Back!
                </Text>
                <Text className="text-sm text-slate-500 mb-6">
                  Sign in to continue tracking
                </Text>

                <View className="gap-4">
                  {/* Email Input */}
                  <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    icon={<Fontisto name="email" size={24} color="#64748b" />}
                    keyboardType="email-address"
                  />

                  {/* Password Input with Eye Toggle */}
                  <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    icon={<Feather name="lock" size={24} color="#64748b" />}
                    showPasswordToggle={true}
                  />

                  <TouchableOpacity
                    onPress={handleForgotPassword}
                    className="self-end"
                  >
                    <Text className="text-indigo-500 text-sm font-semibold">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>

                  <Button
                    title="Sign In"
                    onPress={handleSignIn}
                    variant="primary"
                    disabled={loading}
                    className="mt-2"
                  />

                  <View className="flex-row items-center my-2">
                    <View className="flex-1 h-px bg-slate-200" />
                    <Text className="mx-4 text-slate-400 text-sm font-semibold">
                      OR
                    </Text>
                    <View className="flex-1 h-px bg-slate-200" />
                  </View>

                  <Button
                    title="Sign Up"
                    disabled={loading}
                    onPress={handleSignUp}
                    variant="secondary"
                  />
                </View>
              </View>
            </View>

            <View className="items-center my-6">
              <Text className="text-xs text-indigo-100 text-center">
                By continuing, you agree to our Terms & Privacy Policy
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
}
