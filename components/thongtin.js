import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'
import { createStyles, maxWidth } from 'react-native-media-queries';
import dataNode from './data/data.json'

export default function ThongTin({node}) {
  var check = 0;
  dataNode.map((data, index) => {
    if(data.node === node) {
      check = index;
    }
  })
      const [timer1, setTimer1] = useState(dataNode[check].timer1)
      const [timer2, setTimer2] = useState(dataNode[check].timer2)
      const [timer3, setTimer3] = useState(dataNode[check].timer3)
      const [temperature, setTemperature] = useState(dataNode[check].thresholdTemperature)
      const [humidity, setHumidity] = useState(dataNode[check].thresholdHumidity)
      function onChangeTimer1(text1) {
        setTimer1(text1)
      }
      function onChangeTimer2(text) {
        setTimer2(text)
      }
      function onChangeTimer3(text) {
        setTimer3(text)
      }
      function onChangeTemperature(text) {
        setTemperature(text)
      }
      function onChangeHumidity(text) {
        setHumidity(text)
      }
  return(
      <View style = {styles.sc1}>
      <View style= {styles.op2}>
          <Image
              source={require('../assets/op2/dongho.png')}
              style={styles1.logo}
          />
          <Text style= {{paddingTop: 16, paddingRight: 100, fontSize: 13}}> Timer 1:</Text>
          <TextInput
                  placeholder='00,00'
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {5}
                  value= {timer1}
                  onChangeText= {(text1) => { onChangeTimer1(text1)}}
          />
          <Text style= {styles1.text}>phút</Text>
      </View>
      <View style= {styles.op2}>
          <Image
              source={require('../assets/op2/dongho.png')}
              style={styles1.logo}
          />
          <Text style= {{paddingTop: 16, paddingRight: 100, fontSize: 13}}> Timer 2:</Text>
          <TextInput
                  placeholder="00,00"
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {5}
                  value= {timer2}
                  onChangeText= {(text2) => { onChangeTimer2(text2)}}
          />
          <Text style= {styles1.text}>phút</Text>
      </View>
      <View style= {styles.op2}>
          <Image
              source={require('../assets/op2/dongho.png')}
              style={styles1.logo}
          />
          <Text style= {{paddingTop: 16, paddingRight: 100, fontSize: 13}}> Timer 3:</Text>
          <TextInput
                  placeholder="00,00"
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {5}
                  value= {timer3}
                  onChangeText= {(text3) => { onChangeTimer3(text3)}}
          />
          <Text style= {styles1.text}>phút</Text>
      </View>
      <View style= {styles.op2}>
          <Image
              source={require('../assets/op2/viet.png')}
              style={styles1.logo}
          />
          <Text style= {{paddingTop: 16, paddingRight: 10, fontSize: 13}}> Threshold temperature:</Text>
          <TextInput
                  placeholder="00,00"
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {5}
                  value= {temperature}
                  onChangeText= {(text4) => { onChangeTemperature(text4)}}
          />
          <Text style= {styles1.text}>°C</Text>
      </View>
      <View style= {styles.op2}>
          <Image
              source={require('../assets/op2/viet.png')}
              style={styles1.logo}
          />
          <Text style= {{paddingTop: 16, paddingRight: 30, fontSize: 13}}> Threshold humidity:</Text>
          <TextInput
                  placeholder="00,00"
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {5}
                  value= {humidity}
                  onChangeText= {(text5) => { onChangeHumidity(text5)}}
          />
          <Text style= {styles1.text}>%</Text>
      </View>
  </View>
    )
}
const styles = StyleSheet.create({
  op2: {
    alignItems: 'flex-start',
    width: 370,
    flexDirection: 'row',
  },
  sc1: {
    backgroundColor: '#E6F8E0',
    borderColor: '#BCF5A9',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 2,
  },
})
  const base = {
      logo: {
          width: 55,
          height: 55,
      },
      input: {
          borderBottomColor: '#8A8F9E',
          borderBottomWidth: StyleSheet.hairlineWidth,
          height: 40,
          width: 80,
          fontSize: 15,
          color: '#161F3D',
          marginRight: 10,
      },
      text: {
          paddingTop: 20,
          fontSize: 14,
      }
  }
  const styles1 = createStyles(
      base,
      maxWidth(360, {
          logo: {
              width: 40,
              height: 40,
          },
          input: {
              height: 30
          },
          text: {
              paddingTop: 14
          }
      })
  )