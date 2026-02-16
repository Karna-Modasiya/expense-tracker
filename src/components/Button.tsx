import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../types';

export function Button({ 
  title, 
  onPress, 
  variant = 'primary',
  className,
  ...props 
}: ButtonProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <TouchableOpacity
      className={`h-14 rounded-xl items-center justify-center mt-2 ${
        isPrimary 
          ? 'bg-indigo-500 shadow-lg shadow-indigo-500/30' 
          : 'bg-transparent border-2 border-indigo-500'
      } ${className || ''}`}
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
    >
      <Text 
        className={`text-base font-bold ${
          isPrimary ? 'text-white' : 'text-indigo-500'
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}