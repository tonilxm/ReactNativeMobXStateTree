import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import Styles from './styles/HeaderStyles'

class Header extends Component {
  render() {
    const { left, title, right } = this.props
    return(
      <View style={Styles.container}>
        <View style={Styles.leftContent}>
          { left }          
        </View>
        <View style={Styles.centerContent}>
            <Text style={Styles.title}>{title}</Text>
        </View>
        <View style={Styles.rightContent}>
            { right }
        </View>
      </View>
    )
  }  
}

Header.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
  title: PropTypes.string  
}

export default Header