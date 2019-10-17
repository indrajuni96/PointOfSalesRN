import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './Screens/Login'
import Register from './Screens/Register'
import NotFound from './Screens/NotFound'
import Home from './Screens/Home'
import History from './Screens/History'
import AddProduct from './Screens/AddProduct'

const MainNavigator = createStackNavigator({
  Login,
  Register,
  NotFound,
  Home,
  History,
  AddProduct
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})

export default createAppContainer(MainNavigator)