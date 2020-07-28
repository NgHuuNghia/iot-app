import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Node1 from '../routes/Node1'
import Node2 from '../routes/Node2'
import Node3 from '../routes/Node3'
import Node4 from '../routes/Node4'
import Node5 from '../routes/Node5'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator (props) {
  return (
    <Tab.Navigator
      initialRouteName={'Node1'}
      tabBarOptions={{
        activeTintColor: 'black',
        showLabel: true,
        inactiveBackgroundColor: '#82FA58'
      }}>
      <Tab.Screen
        name='Node1'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        children={() => <Node1 {...props} title="Node1"/>}
      />
      <Tab.Screen
        name='Node2'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        children={() => <Node2 {...props} title="Node2" />}
      />
      <Tab.Screen
        name='Node3'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        children={() => <Node3 {...props} title="Node3" />}
      />
      <Tab.Screen
        name='Node4'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        title="1"
        children={() => <Node4 {...props} title="Node4"/>}
      />
      <Tab.Screen
        name='Node5'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        children={() => <Node5 {...props} title="Node5" />}
      />
    </Tab.Navigator>
  )
}
