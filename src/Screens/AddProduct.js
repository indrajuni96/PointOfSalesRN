import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  Form,
  Item,
  Input,
  Picker,
  Button
} from 'native-base'
import Footers from '../Components/Footers'

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }} >
          <View style={{ flex: 1, padding: 10 }}>
            <Text style={styles.textHeaderHistory}>
              Add Item
          </Text>
            <Form style={{ padding: 20, marginTop: 40 }}>
              <Item last style={{ marginBottom: 20 }}>
                <Input placeholder="Name" />
              </Item>
              <Item last style={{ marginBottom: 20 }}>
                <Input placeholder="Description" />
              </Item>
              <Item last style={{ marginBottom: 20 }}>
                <Input placeholder="Image" />
              </Item>
              <Item last style={{ marginBottom: 20 }}>
                <Picker
                  note
                  mode="dropdown"
                  style={{ width: 120 }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Makanan" value="2" />
                  <Picker.Item label="Minuman" value="1" />
                </Picker>
              </Item>
              <Item last style={{ marginBottom: 20 }}>
                <Input placeholder="Price" />
              </Item>
              <Item last style={{ marginBottom: 20 }}>
                <Input placeholder="Quantity" />
              </Item>
              <View style={{ alignItems: 'flex-end' }}>
                <Button style={styles.buttonAdd}>
                  <Text style={styles.textButtonAdd}>
                    Add
                </Text>
                </Button>
              </View>
            </Form>
          </View>
          <Footers navigate={this.props.navigation.navigate} />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  textHeaderHistory: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  buttonAdd: {
    backgroundColor: '#2ecc71',
    width: 90,
    height: 50
  },
  textButtonAdd: {
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 19
  }
})