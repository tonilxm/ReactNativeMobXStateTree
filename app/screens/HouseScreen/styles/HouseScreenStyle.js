import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'
 import { Fonts } from '../../../themes'
 
export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.snow
  },
  icon: { color: Colors.snow, fontSize: Fonts.size.h6},
})