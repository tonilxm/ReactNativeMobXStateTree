import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background
  },
  title: {
      paddingHorizontal: 30,
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  titleDark: {
      color: Colors.black
  },
  subtitle: {
      marginTop: 5,
      paddingHorizontal: 30,
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 255, 0.75)',
      fontSize: 13,
      fontStyle: 'italic',
      textAlign: 'center'
  },
  slider: {
      marginTop: 6,
      overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
      paddingVertical: 0 // for custom animation
  },
  paginationContainer: {
      paddingVertical: 0
  },
  paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 8
  }
})
