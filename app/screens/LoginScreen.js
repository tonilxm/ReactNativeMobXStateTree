import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, Image, Keyboard, LayoutAnimation } from 'react-native'
import Styles from './styles/LoginScreenStyles'
import { Images, Metrics, Fonts, Colors } from '../themes'
import { Button, Text, Form, Item, Input } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

class LoginScreen extends Component {
  keyboardDidShowListener = {};
  keyboardDidHideListener = {};

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth - 20, height: Metrics.screenHeight * 0.5 - 20 }
    }
  }

  componentDidMount () {

  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: { width: 200, height: 100 }
    })
  };

  keyboardDidHide = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth - 20, height: Metrics.screenHeight * 0.4 }
    })
  };

  login = () => {
    const { username, password } = this.state
    this.props.navigation.navigate('AddBookScreen')
  };

  hideKeboard = () => {
    Keyboard.dismiss()
  };

  handleChangeUsername = text => {
    this.setState({ username: text })
  };

  handleChangePassword = text => {
    this.setState({ password: text })
  };

  render () {
    const { username, password } = this.state
    return (
      <View
        style={Styles.container}
        keyboardShouldPersistTaps='always'>
        <TouchableWithoutFeedback onPress={this.hideKeboard}>
          <Image source={Images.logo} style={[Styles.topLogo, this.state.topLogo]} />
        </TouchableWithoutFeedback>
        <View style={Styles.form}>
          <Form>
            <Item>
              <Icon name='user' style={{ fontSize: 18, marginRight: 8 }} />
              <Input
                ref='username'
                value={username}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeUsername}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.password._root.focus()}
                placeholder='Username'
              />
            </Item>
            <Item>
              <Icon name='lock' style={{ fontSize: 18, marginRight: 8 }} />
              <Input
                ref={ref => (this.password = ref)}
                value={password}
                keyboardType='default'
                returnKeyType='go'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                onChangeText={this.handleChangePassword}
                underlineColorAndroid='transparent'
                onSubmitEditing={this.signIn}
                placeholder='Password'
              />
            </Item>
          </Form>
          <View style={{ marginTop: 5 }}>
            <Text style={{ alignSelf: 'flex-end', marginRight: 10, fontSize: Fonts.size.small }}>Forgot password?</Text>
          </View>
          <View style={[Styles.loginRow]}>
            <Button style={{ alignSelf: 'center' }} onPress={this.login}>
              <Text>Login</Text>
            </Button>
          </View>
          <View style={[Styles.socialLoginRow]}>
            <Button iconLeft style={{ backgroundColor: Colors.facebook }} onPress={this.hideKeboard}>
              <Icon name='facebook' color={'white'} style={{paddingLeft: 15, fontSize: 18}} />
              <Text>Facebook</Text>
            </Button>
            <Button style={{ backgroundColor: Colors.tweeter }} onPress={this.hideKeboard}>
              <Icon name='twitter' color={'white'} style={{paddingLeft: 15, fontSize: 18}} />
              <Text>Twitter</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default LoginScreen
