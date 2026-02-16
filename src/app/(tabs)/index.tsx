import { View, Text, Button } from 'react-native'
import React from 'react'
import { supabase } from '~/src/lib/supabase'

export default function home() {
  return (
    <View style={{flex:1, justifyContent: 'center'}}>
      <Text>home</Text>
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  )
}