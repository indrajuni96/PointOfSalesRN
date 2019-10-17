import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'
import {
  Icon,
  Button
} from 'native-base'
import convertRupiah from "rupiah-format"

export default class CardItems extends Component {
  render() {
    return (
      <>
        <View style={styles.contentCardItem}>
          <SafeAreaView style={styles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}>
              {this.props.data.map((item, index) => {
                return (
                  <View style={styles.rowCardItem} key={item.idProduct}>
                    <View style={styles.colCardItemImage}>
                      <Image
                        style={{ width: '100%', height: '100%', borderRadius: 5 }}
                        source={{ uri: 'http://192.168.1.11:4000/' + item.image }} />
                    </View>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                      <View style={styles.rowCardItemText}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>
                          {item.name}
                        </Text>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>
                          {item.categoritu}
                        </Text>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>
                          {convertRupiah.convert(item.price)}
                        </Text>
                      </View>
                      <View style={styles.rowCardItemButton}>
                        <View style={{ flexDirection: 'row' }}>
                          <Button success style={{ backgroundColor: '#05c46b', borderRadius: 5 }}>
                            <Icon name="cart" />
                            <Text style={styles.cartItemButtonText}> Add </Text>
                          </Button>
                        </View>
                      </View>
                    </View>

                  </View>
                )
              })}
            </ScrollView>
          </SafeAreaView>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  contentCardItem: {
    height: '80%',
    paddingTop: 10,
    paddingBottom: 10
  },
  container: {
    flex: 1
  },
  rowCardItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f6fa',
    height: 170,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    elevation: 5,
  },
  colCardItemImage: {
    width: 120,
    marginRight: 5,
    borderRadius: 7
  },
  rowCardItemText: {
    width: '100%',
    height: '70%',
    padding: 10
  },
  rowCardItemButton: {
    height: '30%',
    alignItems: 'flex-end'
  },
  cartItemButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: -10,
    marginRight: 14
  }
})