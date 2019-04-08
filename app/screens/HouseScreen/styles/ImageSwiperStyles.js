import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'

const imageheight = 350
 
export default StyleSheet.create({
  container: {
    height: imageheight,
    width: 'auto',
    elevation: 5
  },
  imageContainer: { 
  },
  image: {
    height: imageheight,
    width: 'auto'
  },
  pagination: { bottom: 4 },
  text: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: { marginHorizontal: 16, marginVertical: 8 },
  dot: {backgroundColor: Colors.snow, width: 3, height: 3, borderRadius: 5, marginLeft: 3, marginRight: 3},
  activeDot: {backgroundColor: Colors.background, width: 7, height: 7, borderRadius: 8, marginLeft: 5, marginRight: 5}
})