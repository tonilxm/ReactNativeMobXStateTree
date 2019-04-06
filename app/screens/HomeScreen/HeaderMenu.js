import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Styles from './styles/HeaderMenuStyles'
import AntIcon from 'react-native-vector-icons/dist/AntDesign'
import Feather from 'react-native-vector-icons/dist/Feather'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
 
    }
  }
  
  render () {
    const {title} = this.props;
    return (
      <View style={Styles.container}>
        <View style={Styles.upperContent}>
            <View style={{ flex: 1 }}>
                <View style={Styles.leftUpperContent}>
                  {/* put icon here */}          
                </View>
            </View>
            <View style={Styles.centerUpperContent}>
                <Text style={Styles.title}>{title}</Text>
            </View>
            <View style={Styles.rightUpperContent}>
                <AntIcon style={Styles.icon} name='bells'></AntIcon>
                <AntIcon style={Styles.icon} name='setting'></AntIcon>
            </View>
        </View>
        <View style={Styles.lowerContent}>
          <View style={Styles.iconWithTextContainer}>
            <Feather style={Styles.icon} name='home'></Feather>
            <Text style={Styles.iconText}>Home</Text>
          </View>
          <View style={Styles.iconWithTextContainer}>
            <Feather style={Styles.icon} name='shopping-bag'></Feather>
            <Text style={Styles.iconText}>Deals</Text>
          </View>
        </View>
      </View>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
