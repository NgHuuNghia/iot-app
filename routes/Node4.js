import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Node4 from '../screen/Node/Node4'

const Stack = createStackNavigator()

const {Navigator, Screen} = Stack

export default function ManamentStack(props) {
	return (
		<Navigator initialRouteName={'Node4'} >
			<Screen
				name={'Node4'}
				component={Node4}
				options={{
					title: props.title,
					headerTitleAlign: 'center',
					headerPressColorAndroid: '#BCF5A9',
				}}
			/>
		</Navigator>
	)
}
