import React, { Component } from 'react';
import {
  StyleSheet,
  View
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

export default class Footers extends Component {
  render() {
    return (
      <>
        <Container>
          <View style={styles.inputSearch}>
            <Item rounded>
              <Icon active name='search' />
              <Input placeholder='Search product...' />
            </Item>
          </View>
          <Content />
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
  inputSearch: {
    margin: 15
  },
})