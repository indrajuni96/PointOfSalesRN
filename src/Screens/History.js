import React, { Component } from 'react';
import axios from 'axios'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import Historys from '../Components/History'
import Footers from '../Components/Footers'

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      order: [],
      count: 0,
      orders: 0,
      resYearIncome: 0,
      yesterday: 0,
      weeknow: 0,
      yearlast: 0
    }
    this.getRecentOrder = this.getRecentOrder.bind(this)
  }

  async componentDidMount() {
    await this.getCountOrder();
    await this.getRecentOrder();
  }

  getCountOrder = async () => {
    // axios.get('http://18.232.138.207:4000/api/v1/history/countorder')
    axios.get('http://10.0.2.2:4000/api/v1/history/countorder')
      .then(result => {
        this.setState({
          count: result.data.data[0].daynow,
          orders: result.data.data[0].lastweek,
          resYearIncome: result.data.data[0].yearnow,
          yesterday: result.data.data[0].yesterday,
          weeknow: result.data.data[0].weeknow,
          yearlast: result.data.data[0].yearlast
        })
        console.log(this.state.orders)
      }).catch(err => {
        console.log(err)
      })
  }

  getRecentOrder = async (event) => {
    // let data = event.target.value
    let data = 'week'
    // await axios.get('http://10.0.2.2:4000/api/v1/history/recentorder?order=' + data)
    await axios.get('http://18.232.138.207:4000/api/v1/history/recentorder?order=' + data)
      .then(result => {
        this.setState({
          data: result.data.data,
          order: data
        })
        // console.log(data)
      })
  }

  render() {
    return (
      <>
        <View style={styles.containerMain}>
          <SafeAreaView style={styles.container}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}>

              <Historys
                yearlast={this.state.yearlast}
                weeknow={this.state.weeknow}
                yesterday={this.state.yesterday}
                orders={this.state.orders}
                count={this.state.count}
                resYearIncome={this.state.resYearIncome}
                data={this.state.data}
              />

            </ScrollView>
          </SafeAreaView>
          <Footers navigate={this.props.navigation.navigate} />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10
  },
})