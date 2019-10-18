import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './Screens/Login'
import Register from './Screens/Register'
import NotFound from './Screens/NotFound'
import Home from './Screens/Home'
import History from './Screens/History'
import ManagementProduct from './Screens/ManagementProduct'

const MainNavigator = createStackNavigator({
  Login,
  Register,
  NotFound,
  Home,
  History,
  ManagementProduct
}, {
  headerMode: 'none',
  initialRouteName: 'Login'
})

export default createAppContainer(MainNavigator)