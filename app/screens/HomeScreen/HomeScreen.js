import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import Styles from '../styles/HomeScreenStyles'
import HeaderMenu from '../../components/HeaderMenu';
import { Colors } from '../../themes';

class HomeScreen extends Component {
  keyboardDidShowListener = {};
  keyboardDidHideListener = {};

  constructor (props) {
    super(props)
    this.state = {
 
    }
  }
  
  render () {
    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" />
        <HeaderMenu/>
        <View style={{ flex: 1, backgroundColor: Colors.snow}}>
          <Text>Test</Text>
        </View>
      </View>
    )
  }
}

export default HomeScreen
