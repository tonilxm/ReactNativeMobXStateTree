import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import AddBookScreen from '../screens/AddBookScreen'
import LoginScreen from "../screens/LoginScreen"

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  AddBookScreen: { screen: AddBookScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
})

export default createAppContainer(PrimaryNav)
