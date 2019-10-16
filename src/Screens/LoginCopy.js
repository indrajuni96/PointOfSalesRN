import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import bgLogin from '../Assets/Images/bgLogin.png'

export default class Login extends Component {
  render() {
    return (
      <>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={bgLogin} />
            <Text style={styles.title}>Cafeku</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.containerFormLogin}>
              <TextInput
                placeholder="email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                style={styles.input} />
              <TextInput
                placeholder="password"
                secureTextEntry
                placeholderTextColor="rgba(255,255,255,0.7)"
                style={styles.input} />
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => this.props.navigation.navigate('NotFound')}>
                <Text style={styles.buttonLoginText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(29, 209, 161,1.0)'
  },
  logoContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  containerFormLogin: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#ffff',
    paddingHorizontal: 10
  },
  buttonLogin: {
    backgroundColor: 'rgba(16, 172, 132,1.0)',
    paddingVertical: 15
  },
  buttonLoginText: {
    textAlign: 'center',
    color: '#ffff',
    fontWeight: '700'
  }
})