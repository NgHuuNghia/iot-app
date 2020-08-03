import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LOGIN } from '../constants'
import LoginScreen from '../screen/Login'

const Stack = createStackNavigator()

export default function AuthNavigator () {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      headerMode='none'
      screenOptions={{
        headerTintColor: 'red'
      }}>
      <Stack.Screen
        name={LOGIN}
        component={LoginScreen}
        options={{
          title: 'Login'
        }}
      />
    </Stack.Navigator>
  )
}
