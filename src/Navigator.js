import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './Screens/Login'
import Register from './Screens/Register'
import NotFound from './Screens/NotFound'
import Home from './Screens/Home'

const MainNavigator = createStackNavigator({
  Login,
  Register,
  NotFound,
  Home
}, {
  headerMode: 'none',
  initialRouteName: 'Login'
})

export default createAppContainer(MainNavigator)