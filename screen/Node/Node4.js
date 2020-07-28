import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Auto from '../../components/auto'
import ThongTin from '../../components/thongtin'
import ThongKe from '../../components/thongke'

export default function Node4({navigation}) {
	return (
	<SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#82FA58" barStyle = "dark-content" hidden = {false} translucent = {true} />
        <ThongKe />
        <ThongTin node = "Node4"/>
        <Auto node = "Node4"/>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
  container: {
    margin:10,
    height:"98%",
    fontSize: 13,
  },
})