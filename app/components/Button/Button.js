import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Colors } from '../../themes';

export class Button extends Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    const { title, buttonStyle, titleStyle } = this.props;
    return (
      <TouchableWithoutFeedback>
        <View style={{width: 'auto', height: 'auto', justifyContent: 'center',
          alignItems: 'center', borderRadius: 8, ...buttonStyle  }}>
          <Text style={titleStyle}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Button.propTypes = {
  title: PropTypes.string,
  buttonStyle: PropTypes.object,
  titleStyle: PropTypes.object,
}

Button.defaultProps = {
  buttonStyle: { backgroundColor: Colors.background}
}

export default Button
