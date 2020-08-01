import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'
import { createStyles, maxWidth } from 'react-native-media-queries';

export default function ThongTin({node, Clients}) {
      const [timer1, setTimer1] = useState(null)
      const [timer2, setTimer2] = useState(null)
      const [timer3, setTimer3] = useState(null)
      const [temperature, setTemperature] = useState(null)
      const [humidity, setHumidity] = useState(null)
      useEffect(() => {
        setTimer1(node.timer1)
        setTimer2(node.timer2)
        setTimer3(node.timer3)
        setTemperature(node.th_temp)
        setHumidity(node.th_humi)
    }, [node])
      function submitData() {
        Clients.write(JSON.stringify(
            {"id_device":node.id_device,"timer1":timer1,"timer2":timer2,"timer3":timer3,"th_temp":temperature,"th_humi":humidity,"req_device":"106"}
        ));
        setTimeout(()=>{Clients.write(JSON.stringify({id_device: node.id_device, req_device: '109'}))}, 5000);
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
                  placeholder='0000'
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {4}
                  value= {timer1}
                  onChangeText={(text) => { setTimer1(text) }}
                  onSubmitEditing={() => submitData()}
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
                  placeholder="0000"
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {4}
                  value= {timer2}
                  onChangeText={(text) => { setTimer2(text) }}
                  onSubmitEditing={() => submitData()}
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
                  placeholder="0000"
                  underlineColorAndroid='transparent'
                  style={styles1.input}
                  keyboardType={'numeric'}
                  maxLength = {4}
                  value= {timer3}
                  onChangeText={(text) => { setTimer3(text) }}
                  onSubmitEditing={() => submitData()}
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
                  onChangeText={(text) => { setTemperature(text) }}
                  onSubmitEditing={() => submitData()}
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
                  onChangeText={(text) => { setHumidity(text) }}
                  onSubmitEditing={() => submitData()}
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
              height: 35,
              paddingBottom: 0
          },
          text: {
              paddingTop: 14
          }
      })
  )