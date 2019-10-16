import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Item,
  Input,
  Card,
  CardItem,
  Body
} from 'native-base';
import iconCake from '../Assets/Images/cake.png'
import iconCoffee from '../Assets/Images/coffee.png'
import iconWater from '../Assets/Images/water.png'
import iconDoughnut from '../Assets/Images/doughnut.png'
import iconPizza from '../Assets/Images/pizza.png'
import iconUnyil from '../Assets/Images/uyil.png'

export default class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.containerMain}>
          <SafeAreaView style={styles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scrollView}>
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
                <SafeAreaView style={styles.scrollViewItems}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.contentKategori}>
                      <View style={styles.cardItmeKategori}>
                        <View style={styles.contentKategoriIcon}>
                          <Image style={styles.logo} source={iconCoffee} />
                        </View>
                        <View>
                          <Text style={styles.logoText}>Coffee</Text>
                        </View>
                      </View>
                      <View style={styles.cardItmeKategori}>
                        <View style={styles.contentKategoriIcon}>
                          <Image style={styles.logo} source={iconCake} />
                        </View>
                        <View>
                          <Text style={styles.logoText}>Cake</Text>
                        </View>
                      </View>
                      <View style={styles.cardItmeKategori}>
                        <View style={styles.contentKategoriIcon}>
                          <Image style={styles.logo} source={iconWater} />
                        </View>
                        <View>
                          <Text style={styles.logoText}>Water</Text>
                        </View>
                      </View>
                      <View style={styles.cardItmeKategori}>
                        <View style={styles.contentKategoriIcon}>
                          <Image style={styles.logo} source={iconDoughnut} />
                        </View>
                        <View>
                          <Text style={styles.logoText}>Doughnut</Text>
                        </View>
                      </View>
                      <View style={styles.cardItmeKategori}>
                        <View style={styles.contentKategoriIcon}>
                          <Image style={styles.logo} source={iconPizza} />
                        </View>
                        <View>
                          <Text style={styles.logoText}>Pizza</Text>
                        </View>
                      </View>
                      <View style={styles.cardItmeKategori}>
                        <View style={styles.contentKategoriIcon}>
                          <Image style={styles.logo} source={iconUnyil} />
                        </View>
                        <View>
                          <Text style={styles.logoText}>Unyil</Text>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </SafeAreaView>
                <Text style={styles.textFavorite}>
                  Favorite
                </Text>
                <SafeAreaView style={styles.scrollViewItems}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
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
                  </ScrollView>
                </SafeAreaView>
                <View style={styles.contentItems}>
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
                </View>

              </View>
            </ScrollView>
          </SafeAreaView>
          <Footer >
            <FooterTab style={{ backgroundColor: '#dfe4ea' }}>
              <Button vertical>
                <Icon name="apps" style={{ color: '#192a56' }} />
                <Text style={{ color: '#192a56' }}>Home</Text>
              </Button>
              <Button vertical>
                <Icon name="cart" style={{ color: '#192a56' }} />
                <Text style={{ color: '#192a56' }}>Cart</Text>
              </Button>
              <Button vertical>
                <Icon name="podium" style={{ color: '#192a56' }} />
                <Text style={{ color: '#192a56' }}>History</Text>
              </Button>
              <Button vertical>
                <Icon name="settings" style={{ color: '#192a56' }} />
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={{ color: '#192a56' }}>
                  Options
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#192a56'
  },
  text: {
    fontSize: 42,
  },
  containerInputSearch: {
    height: 200,
    padding: 20,
  },
  inputSearch: {
    borderColor: '#192a56',
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
    height: 700,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,

  },
  contentItems: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20
  },
  cardItems: {
    flex: 1,
    height: '100%',
  },
  scrollViewItems: {
    height: '25%',
    backgroundColor: '#ffff',
  },
  textFavorite: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  contentKategori: {
    flexDirection: 'row',
    height: 130,
    padding: 10,
    alignItems: 'center'
  },
  cardItmeKategori: {
    height: 75,
    width: 75,
    alignItems: 'center',
    marginRight: 5
  },
  contentKategoriIcon: {
    height: 70,
    borderRadius: 20,
    backgroundColor: '#dfe4ea',
    padding: 5
  },
  logo: {
    width: 60,
    height: 60,
  },
  logoText: {
    color: '#192a56',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
})