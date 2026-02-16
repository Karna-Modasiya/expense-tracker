import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { InputProps } from '../types';
import Ionicons from '@expo/vector-icons/Ionicons';

export function Input({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry,
  icon,
  showPasswordToggle = false,
  ...props 
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="flex-row items-center bg-slate-50 rounded-xl border border-slate-200 px-4 h-14">
      {icon && <View className="mr-3">{icon}</View>}
      <TextInput
        className="flex-1 text-base text-slate-800"
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={showPasswordToggle ? !isPasswordVisible : secureTextEntry}
        autoCapitalize="none"
        {...props}
      />
      {showPasswordToggle && (
        <TouchableOpacity 
          onPress={togglePasswordVisibility}
          className="ml-2"
          activeOpacity={0.7}
        >
          {isPasswordVisible ? <Ionicons name="eye-outline" size={24} color="#64748b" /> : <Ionicons name="eye-off-outline" size={24} color="#64748b" />}
        </TouchableOpacity>
      )}
    </View>
  );
}