import React, { useEffect, useState, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {SPLASH, BOTTOM_TAB, AUTH} from '../constants'
import SplashScreen from '../screen/Splash'
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthNavigator'
import {CTX} from '../tools/context'


const Stack = createStackNavigator()

export default function AppStackNavigator () {
  const [loading, setLoading] = useState(true)

  const context = useContext(CTX)
  const { token } = context

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })

	return (
		<Stack.Navigator
			initialRouteName={SPLASH}
			headerMode="none"
			screenOptions={{
				animationTypeForReplace: 'push'
			}}>
			{loading ? (
				<Stack.Screen name={SPLASH} component={SplashScreen} />
			) : !token ? (
				<Stack.Screen name={AUTH} component={AuthStackNavigator} />
			) :
			(
				<>
					<Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigator} />
				</>
			)}
		</Stack.Navigator>
	)
}
