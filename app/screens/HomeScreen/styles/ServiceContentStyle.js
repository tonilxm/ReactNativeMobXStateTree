import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'

export default StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: Colors.snow
  },
  slideContent: { flex: 1, flexDirection:'row', flexWrap: 'wrap'},
  text: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: { marginHorizontal: 16, marginVertical: 8 },
  dot: {backgroundColor: Colors.coal, width: 5, height: 5, borderRadius: 5, marginLeft: 3, marginRight: 3},
  activeDot: {backgroundColor: Colors.background, width: 10, height: 10, borderRadius: 8, marginLeft: 5, marginRight: 5}
})
