import { View, Text } from 'react-native'
import React from 'react'
import { supabase } from '~/src/lib/supabase'
import { Button } from '~/src/components/Button'

export default function home() {
  return (
    <View style={{flex:1, justifyContent: 'center'}}>
      <Text>home</Text>
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  )
}