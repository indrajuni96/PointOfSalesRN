import React, { Component } from 'react'
import axios from 'axios'
import convertRupiah from "rupiah-format"
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Modal,
  TouchableHighlight
} from 'react-native'
import {
  Icon,
  Button,
  Fab,
  Form,
  Input,
  Item,
  Picker
} from 'native-base'
import Footers from '../Components/Footers'
import { connect } from "react-redux";
import { getHome } from "../public/redux/Actions/Home";
import { BASEURL } from "react-native-dotenv"

class ManagementProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',
      byProduct: 'idProduct',
      sort: 'asc',
      page: '1',
      modalVisible: false,
      modalVisibleUpdate: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(idProduct) {
    axios.delete(`${BASEURL}/api/v1/products/` + idProduct)
    this.getAll(
      this.state.search,
      this.state.byProduct,
      this.state.sort,
      this.state.page)
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setModalVisibleUpdate(visible) {
    this.setState({ modalVisibleUpdate: visible });
  }

  async componentDidMount() {
    await this.getAll(
      this.state.search,
      this.state.byProduct,
      this.state.sort,
      this.state.page)
  }

  getAll = async (search, byProduct, sort, page) => {
    const result = await this.props.dispatch(
      getHome({
        search: this.state.search,
        sort: this.state.sort,
        order: this.state.byProduct,
        page: this.state.page
      })
    );

    this.setState({
      data: result.value.data.data,
      totalPages: result.value.data.total_pages
    });
    console.log(result)
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: '#192a56' }}>
          <View style={{ flex: 1 }}>
            <View style={styles.containerHeader}>
              <Text style={styles.textHeader}>
                Management Product
							</Text>
            </View>
            <View style={styles.containerProduct}>
              <SafeAreaView style={styles.container}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={styles.scrollView}>
                  {this.state.data.map((item, key) => {
                    return (
                      <View style={styles.rowCardItem} key={item.idProduct}>
                        <View style={styles.colCardItemImage}>
                          <Image
                            style={{ width: '100%', height: '100%', borderRadius: 5 }}
                            // source={{ uri: 'http://18.232.138.207:4000/' + item.image }} />
                            source={{ uri: 'http://192.168.0.116:4000/' + item.image }} />
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
                              <Button style={{ backgroundColor: '#00d8d6', borderRadius: 5, marginRight: 5 }}
                                onPress={() => {
                                  this.setModalVisibleUpdate(!this.state.modalVisibleUpdate);
                                }}>
                                <Icon name="md-build" />
                              </Button>
                              <Button style={{ backgroundColor: '#ff3f34', borderRadius: 5 }}
                                onPress={() => this.handleDelete(item.idProduct)}>
                                <Icon name="md-trash" />
                              </Button>
                            </View>
                          </View>
                        </View>
                      </View>
                    )
                  })}
                </ScrollView>
              </SafeAreaView>
              {/* MODAL ADD */}
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22, padding: 20, height: '100%', flexDirection: 'column' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{
                      alignSelf: 'center',
                      marginBottom: 40,
                      fontWeight: 'bold',
                      fontSize: 25
                    }}>
                      ADD PRODUCT
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
                      </View>
                      <TouchableHighlight
                        style={styles.buttonSave}
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={styles.buttonText}>
                          Save
											</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={styles.buttonClose}
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={styles.buttonText}>
                          Close
											</Text>
                      </TouchableHighlight>
                    </Form>
                  </View>
                </View>
              </Modal>
              {/* MODAL UPDATE */}
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisibleUpdate}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22, padding: 20, height: '100%', flexDirection: 'column' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{
                      alignSelf: 'center',
                      marginBottom: 40,
                      fontWeight: 'bold',
                      fontSize: 25
                    }}>
                      UPDATE PRODUCT
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
                      </View>
                      <TouchableHighlight
                        style={styles.buttonSave}
                        onPress={() => {
                          this.setModalVisibleUpdate(!this.state.modalVisibleUpdate);
                        }}>
                        <Text style={styles.buttonText}>
                          Save
											</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={styles.buttonClose}
                        onPress={() => {
                          this.setModalVisibleUpdate(!this.state.modalVisibleUpdate);
                        }}>
                        <Text style={styles.buttonText}>
                          Close
											</Text>
                      </TouchableHighlight>
                    </Form>
                  </View>
                </View>
              </Modal>
              <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: '#05c46b', marginBottom: 130 }}
                position="bottomRight"
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Icon name="add" />
              </Fab>
            </View>
          </View>
          <Footers navigate={this.props.navigation.navigate} />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 100,
  },
  containerProduct: {
    height: 750,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 30,
    paddingBottom: 70,
    paddingLeft: 10,
    paddingRight: 10
  },
  container: {
    flex: 1,
  },
  scrollView: {
  },
  rowCardItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f6fa',
    height: 170,
    marginBottom: 15,
    padding: 10,
    borderRadius: 7,
    shadowColor: "#000",
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
  textHeader: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 27,
    fontWeight: 'bold',
    color: '#ffff'
  },
  buttonClose: {
    backgroundColor: '#ff3f34',
    height: 50,
  },
  buttonSave: {
    backgroundColor: '#05c46b',
    height: 50,
    marginBottom: 5
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    color: '#ffff'
  }
})

const mapStateToProps = state => {
  return {
    data: state.Home
  }
}

export default connect(mapStateToProps)(ManagementProduct)