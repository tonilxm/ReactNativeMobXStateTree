import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Metrics } from '../../themes';

const buttonsPerRow = 4
const padding = 17
const buttonWidth = (Metrics.screenWidth - (buttonsPerRow * 2 * padding)) / buttonsPerRow
const imageWidth = 0.5 * buttonWidth

export class ImageButton extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { icon, label, style } = this.props; 
    return (
      <View style={ {...style, justifyContent: 'space-around', alignItems: 'center', 
            height: buttonWidth, width: buttonWidth }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: imageWidth, height: imageWidth, marginHorizontal: 10, marginVertical: 10 }} source={ icon }/>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Text style={{ fontSize: 12 , textAlign: 'center' }}>{ label }</Text>  
        </View>
      </View>
    )
  }
}

ImageButton.propTypes = {
  icon: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
}

export default ImageButton
