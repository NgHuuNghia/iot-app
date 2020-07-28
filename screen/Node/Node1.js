import React  from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Auto from '../../components/auto'
import ThongTin from '../../components/thongtin'
import ThongKe from '../../components/thongke'

export default function Node1({navigation}) {
    return (
       <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#82FA58" barStyle = "dark-content" hidden = {false} translucent = {true} />
            <ThongKe />
            <ThongTin node = "Node1"/>
            <Auto node = "Node1"/>
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
