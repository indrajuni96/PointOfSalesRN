import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native'
import {
  Form,
  Item,
  Input
} from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      email: '',
      password: ''
    }
  }

  loginHandler = async () => {
    const { email, password } = this.state;
    const url = 'http://10.0.2.2:4000/users/login';
    // const url = 'http://18.232.138.207:4000/users/login';
    const payload = {
      email,
      password,
    };
    await axios
      .post(url, payload)
      .then(response => {
        AsyncStorage.multiSet([
          ['email', email],
          ['token', response.data.data.token],
        ]);
        this.props.navigation.navigate('Home');
      })
      .catch(error => {
        ToastAndroid.showWithGravityAndOffset(
          'Invalid email/Password!',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      });
  };

  render() {
    return (
      <>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.containerHeader}>
            <Text style={styles.formLoginTitle1}>Welcome To</Text>
            <Text style={styles.formLoginTitle2}>CafeKu</Text>
          </View>
          <View style={styles.containerFormLogin}>
            <View style={styles.formLogin}>
              <Form>
                <Item
                  style={styles.formInput}
                  last>
                  <Input
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                  />
                </Item>
                <Item
                  style={styles.formInput}
                  last>
                  <Input
                    placeholder="Password"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                  />
                </Item>
                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={this.loginHandler}>
                  <Text style={styles.buttonLoginText}>LOGIN</Text>
                </TouchableOpacity>
              </Form>
            </View>
            <View style={styles.containerFooter}>
              <View style={styles.containerFooterRow}>
                <View style={styles.footerCol}>
                  <Text style={styles.footerText}>
                    Don't Have an account?
                <Text
                      style={styles.buttonRegisterText}
                      onPress={() => this.props.navigation.navigate('Register')}> Register</Text>
                  </Text>
                </View>
              </View>
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
  },
  containerHeader: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  formLoginTitle1: {
    color: '#3d3d3d',
    fontSize: 20
  },
  formLoginTitle2: {
    color: '#3d3d3d',
    fontSize: 50,
    fontWeight: '700'
  },
  containerFormLogin: {
    height: '30%',
  },
  formLogin: {
    padding: 20
  },
  formInput: {
    marginBottom: 17
  },
  buttonLogin: {
    backgroundColor: 'rgba(29, 209, 161,1.0)',
    paddingVertical: 10,
    borderRadius: 20
  },
  buttonLoginText: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 20,
    fontWeight: '700'
  },
  containerFooter: {
    height: '15%',
  },
  containerFooterRow: {
    flex: 1,
    flexDirection: 'row'
  },
  footerCol: {
    flex: 1,
    // justifyContent: 'center',
    marginLeft: 22
    // alignItems: 'center'
  },
  footerColButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  buttonRegister: {
    width: '60%',
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonRegisterText: {
    textAlign: 'center',
    color: 'rgba(252, 66, 123,1.0)',
    fontSize: 20,
    fontWeight: '700',
  },
  footerText: {
    opacity: 0.8,
    // alignContent: 'flex-end',
  }
})