import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import {
  Card,
  CardItem,
  Body,
  Text
} from 'native-base'

export default class CardItemFavorite extends Component {
  render() {
    return (
      <>
        <Card style={styles.cardItems}>
          <CardItem cardBody>
            <Image
              source={require('../Assets/Images/cappucino.png')}
              style={{ height: 100, width: 200, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Cappucino
                  </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.cardItems}>
          <CardItem cardBody>
            <Image
              source={require('../Assets/Images/cappucino.png')}
              style={{ height: 100, width: 200, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Cappucino
                  </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.cardItems}>
          <CardItem cardBody>
            <Image
              source={require('../Assets/Images/cappucino.png')}
              style={{ height: 100, width: 200, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Cappucino
                  </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.cardItems}>
          <CardItem cardBody>
            <Image
              source={require('../Assets/Images/cappucino.png')}
              style={{ height: 100, width: 200, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Cappucino
                  </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.cardItems}>
          <CardItem cardBody>
            <Image
              source={require('../Assets/Images/cappucino.png')}
              style={{ height: 100, width: 200, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Cappucino
                  </Text>
            </Body>
          </CardItem>
        </Card>
      </>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewItems: {
    height: '25%',
    backgroundColor: '#ffff',
  },
  cardItems: {
    flex: 1,
    height: '100%',
  },
})