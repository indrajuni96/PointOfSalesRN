import React, { Component } from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

export default class Footers extends Component {
  render() {
    return (
      <>
        <Footer >
          <FooterTab style={{ backgroundColor: '#dfe4ea' }}>
            <Button vertical onPress={() => this.props.navigate('Home')}>
              <Icon name="apps" style={{ color: '#192a56' }} />
              <Text style={{ color: '#192a56' }}>Home</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigate('AddProduct')}>
              <Icon name="add-circle" style={{ color: '#192a56' }} />
              <Text style={{ color: '#192a56' }}>Add</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigate('History')}>
              <Icon name="podium" style={{ color: '#192a56' }} />
              <Text style={{ color: '#192a56' }}>History</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigate('Login')}>
              <Icon name="log-out" style={{ color: '#192a56' }} />
              <Text
                style={{ color: '#192a56' }}>
                Logout
                </Text>
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}