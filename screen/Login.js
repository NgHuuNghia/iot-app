import React, { useContext, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import { Formik } from 'formik'
import SafeAreaView from 'react-native-safe-area-view'

import { CTX } from '../tools/context'
import LoginSchema from '../validation/Login'
import { primaryColor } from '../theme'

export default function LoginScreen () {
  const [errorMessage, setErrorMessage] = useState('');
  const authContext = useContext(CTX)
  const { _authenticate } = authContext

  function _onLogin (values) {
    const {username, password} = values
    if(username == "ntthien1998" && password == "123456789")
    {
        const accessToken = "manh1998"
        _authenticate(accessToken)
    }
    else {
      setErrorMessage('Tài khoản hoặc mật khẩu chưa chính xác')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{
            width: 420,
            height: 300,
            position: 'absolute',
            top: 0,
            right: 0
          }}
          source={require('../assets/loginBG.jpg')}
        />
        <View
          style={{
            elevation: 4,
            shadowOffset: { width: 5, height: 5 },
            shadowColor: 'grey',
            shadowOpacity: 0.5,
            shadowRadius: 10
          }}>
          <Image
            source={require('../assets/logo/image1.png')}
            style={{
              width: 80,
              height: 80,
              marginTop: 100,
              alignSelf: 'center',
              borderRadius: 10
            }}
          />
        </View>
        <Text style={styles.greeting}>{'Welcome back.'}</Text>
        <View style={styles.errorMessage}>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
        <Formik
          initialValues={{
            username: 'superadmin',
            password: '12345678'
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            _onLogin(values)
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched
          }) => (
            <View>
              <View style={styles.form}>
                <View>
                  <Text style={styles.inputTitle}>Username</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                  />
                  {errors.username && touched.username ? (
                    <Text style={styles.error}>{errors.username}</Text>
                  ) : null}
                </View>
                <View style={{ marginTop: 32 }}>
                  <Text style={styles.inputTitle}>Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                  />
                  {errors.password && touched.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : null}
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D'
  },
  error: {
    color: primaryColor,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: primaryColor,
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500'
  },
})
