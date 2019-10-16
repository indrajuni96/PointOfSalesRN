import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class NotFound extends Component {
  render() {
    return (
      <>
        <View style={styles.wrapper}>
          <View style={styles.wrapperContent}>
            <Text style={styles.wrapperText}>App Maintenance!</Text>
          </View>
          <View>
            <Text style={styles.wrapperTextSmall}>By indra juniyanto</Text>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(29, 209, 161,1.0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperText: {
    color: '#ffff',
    fontSize: 35,
    fontWeight: 'bold'
  },
  wrapperTextSmall: {
    color: '#ffff',
    paddingBottom: 40
  },
  wrapperContent: {
    flex: 1,
    justifyContent: 'center'
  }
})