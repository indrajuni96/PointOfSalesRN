import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'
import {
  Icon,
  Text,
  Item,
  Input,
  Card,
  CardItem,
  Body
} from 'native-base';
import Footers from '../Components/Footers'
import CardCategory from '../Components/CardCategory'
import CardItems from '../Components/CardItems'
import axios from 'axios';
import { connect } from "react-redux";
import { getHome } from "../public/redux/Actions/Home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',
      byProduct: 'idProduct',
      sort: 'asc',
      page: '1',
    }
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
    // await axios.get('http://10.0.2.2:4000/api/v1/products')
    //   .then(result => {
    //     this.setState({ data: result.data.data })
    //   })
    // console.log(this.state.data)
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

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
                    <Input placeholder='Search'
                      value={this.state.search} onChangeText={this.getSearch} />
                  </Item>
                </View>
              </View>
              <View style={styles.containerContent}>
                <CardCategory />
                <CardItems
                  data={this.state.data}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
          <Footers navigate={this.props.navigation.navigate} />
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
    height: 750,
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
})
const mapStateToProps = state => {
  return {
    data: state.Home
  }
}

export default connect(mapStateToProps)(Home)