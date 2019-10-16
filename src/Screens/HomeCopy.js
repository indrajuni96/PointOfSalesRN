import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Item,
  Input
} from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container style={styles.containerHome}>
          <View style={styles.containerInputSearch}>
            <View style={styles.containerHeader}>
              <Text style={styles.headerText}>CafeKu</Text>
            </View>
            <View>
              <Item rounded style={styles.inputSearch}>
                <Icon active name='search' />
                <Input placeholder='Search' />
              </Item>
            </View>
          </View>
          <View style={styles.containerContent}>

          </View>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="apps" />
                <Text>Home</Text>
              </Button>
              <Button vertical>
                <Icon name="cart" />
                <Text>Cart</Text>
              </Button>
              <Button vertical>
                <Icon name="podium" />
                <Text>History</Text>
              </Button>
              <Button vertical>
                <Icon name="settings" />
                <Text
                  onPress={() => navigation.navigate('Login')}>
                  Option
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#192a56'
  },
  containerInputSearch: {
    height: '25%',
    padding: 20,
  },
  inputSearch: {
    borderColor: '#ffff',
    backgroundColor: '#ffff'
  },
  containerHeader: {
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffff'
  },
  containerContent: {
    height: '75%',
    backgroundColor: '#ffff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  }
})