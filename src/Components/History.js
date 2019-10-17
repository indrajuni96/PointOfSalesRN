import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native'
import {
  Grid,
  Col,
  List,
  ListItem,
  Body,
  Right,
  Button
} from 'native-base'
import convertRupiah from "rupiah-format"

export default class History extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.scrollViewItems}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.cardItemsToday}>
              <Text style={styles.cardTextTitle}>
                Today's Income
                </Text>
              <Text style={styles.cardTextRp}>
                {this.props.count}
              </Text>
              <Text style={styles.cardTextFooter}>
                +2% Yesterday
                </Text>
            </View>
            <View style={styles.cardItemsOrder}>
              <Text style={styles.cardTextTitle}>
                Orders
                </Text>
              <Text style={styles.cardTextRp}>
                {this.props.orders}
              </Text>
              <Text style={styles.cardTextFooter}>
                +5% Last Week
                </Text>
            </View>
            <View style={styles.cardItemsYear}>
              <Text style={styles.cardTextTitle}>
                This Year's Income
                </Text>
              <Text style={styles.cardTextRp}>
                {convertRupiah.convert(this.props.resYearIncome)}
              </Text>
              <Text style={styles.cardTextFooter}>
                +10% Last Year
                </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
        <Text style={styles.textRecentOrder}>Recent Order</Text>

        <View style={styles.contentRecentOrder}>
          <SafeAreaView style={styles.scrollViewItemRecent}>
            <ScrollView
              showsVerticalScrollIndicator={false}>
              <List>
                {this.props.data.map((item, key) => {
                  return (
                    <ListItem thumbnail>
                      <Body>
                        <Text>{item.invoices}</Text>
                        <Text note numberOfLines={1}>{item.orders}</Text>
                      </Body>
                      <Right>
                        <Button transparent>
                          <Text>View</Text>
                        </Button>
                      </Right>
                    </ListItem>
                  )
                })}
              </List>
            </ScrollView>
          </SafeAreaView>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({

  scrollViewItems: {
    height: 200,
    backgroundColor: '#ffff',
  },
  cardItemsToday: {
    flex: 1,
    height: '100%',
    width: 400,
    backgroundColor: '#3c40c6',
    marginRight: 15,
    borderRadius: 7,
    padding: 10,
  },
  cardItemsOrder: {
    flex: 1,
    height: '100%',
    width: 400,
    backgroundColor: '#1dd1a1',
    marginRight: 15,
    borderRadius: 7,
    padding: 10,
  },
  cardItemsYear: {
    flex: 1,
    height: '100%',
    width: 400,
    backgroundColor: '#f53b57',
    marginRight: 15,
    borderRadius: 7,
    padding: 10,
  },
  cardTextTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    color: 'white'
  },
  cardTextRp: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
    color: 'white'
  },
  cardTextFooter: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
    color: 'white'
  },
  textRecentOrder: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  scrollViewItemRecent: {
    // backgroundColor: '#635DB7',
    height: 420,
    paddingRight: 30,
    backgroundColor: '#ffff',
    borderRadius: 7,
  },
  contentRecentOrder: {
    backgroundColor: '#ffff',
    height: 420,
    borderRadius: 7,
    shadowColor: "#000",
    elevation: 11,
    marginBottom: 30
  }
})