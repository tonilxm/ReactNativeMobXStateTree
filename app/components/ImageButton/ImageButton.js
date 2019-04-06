import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Colors } from '../../themes';

export class ImageButton extends Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    const { icon, label, style } = this.props; 
    return (
      <View style={ {...style, justifyContent: 'space-between', alignItems: 'center', 
            height: 72, width: 60 }}>
        <View style={{ flex: 1, borderWidth: 0.3, borderColor: Colors.cloud, borderRadius: 5, 
              alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 24, height: 24, marginHorizontal: 10, marginVertical: 10 }} source={ icon }/>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Text style={{ fontSize: 13, textAlign: 'center' }}>{ label }</Text>  
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
