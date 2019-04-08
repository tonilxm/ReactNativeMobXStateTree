import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'

export default StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: Colors.snow,
  },
  slideContent: { elevation: 5 },
  text: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: { marginHorizontal: 16, marginVertical: 8 },
  dot: {backgroundColor: Colors.snow, width: 3, height: 3, borderRadius: 5, marginLeft: 3, marginRight: 3},
  activeDot: {backgroundColor: Colors.background, width: 7, height: 7, borderRadius: 8, marginLeft: 5, marginRight: 5}
})
