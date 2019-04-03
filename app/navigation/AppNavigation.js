import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddBookScreen from '../screens/AddBookScreen'
import LoginScreen from "../screens/LoginScreen"

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  AddBookScreen: { screen: AddBookScreen },
  LoginScreen: { screen: LoginScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
})

export default createAppContainer(PrimaryNav)
