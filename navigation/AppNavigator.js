import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {SPLASH, BOTTOM_TAB} from '../constants'
import SplashScreen from '../screen/Splash'
import BottomTabNavigator from './BottomTabNavigator'


const Stack = createStackNavigator()

export default function AppStackNavigator () {
  const [loading, setLoading] = useState(true)

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
			) : (	
				<>
					<Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigator} />
				</>
			)}
		</Stack.Navigator>
	)
}
