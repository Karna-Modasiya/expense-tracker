import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { useAuth } from '~/src/providers/AuthProvider';

export default function _layout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }
  return <Tabs screenOptions={{headerShown: false}}>
    <Tabs.Screen name='home'/>
    <Tabs.Screen name='contacts'/>
    <Tabs.Screen name='history'/>
  </Tabs>
}