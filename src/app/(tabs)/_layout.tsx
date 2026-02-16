import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { useAuth } from '~/src/providers/AuthProvider';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function _layout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }
  return <Tabs screenOptions={{
          tabBarActiveTintColor: 'black',
          headerShown: false
        }}>
    <Tabs.Screen name='index' options={{
      title: 'Home',
      headerTitle: 'Home',
      tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />
    }}/>
    <Tabs.Screen name='contacts' options={{
      headerTitle: 'Contacts',
      tabBarIcon: ({color}) => <FontAwesome6 name="contact-book" size={24} color={color} />
    }}/>
    <Tabs.Screen name='history' options={{
      headerTitle: 'History',
      tabBarIcon: ({color}) => <FontAwesome5 name="history" size={24} color={color}/>
    }}/>
  </Tabs>
}