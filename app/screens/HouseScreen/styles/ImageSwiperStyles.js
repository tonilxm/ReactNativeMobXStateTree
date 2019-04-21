import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../themes'

export const imageheight = 300
const { loadingPosY, loadingPosX} = { loadingPosY: imageheight/2,  loadingPosX: (Metrics.screenWidth/2 - 5)}

export default StyleSheet.create({
  container: {
    flex: 1,
    height: imageheight,
    width: 'auto',
    elevation: 5
  },
  imageContainer: {
    flex: 1,
    backgroundColor: Colors.cloud
  },
  image: {
    height: imageheight,
    width: 'auto',
  },
  loadingIndicator: {  position: 'absolute', top: loadingPosY, left: loadingPosX },
  pagination: { bottom: 4 },
  text: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: { marginHorizontal: 16, marginVertical: 8 },
  dot: {backgroundColor: Colors.snow, width: 3, height: 3, borderRadius: 5, marginLeft: 3, marginRight: 3},
  activeDot: {backgroundColor: Colors.background, width: 7, height: 7, borderRadius: 8, marginLeft: 5, marginRight: 5},
  icon: { color: Colors.snow, fontSize: Fonts.size.h6}
})