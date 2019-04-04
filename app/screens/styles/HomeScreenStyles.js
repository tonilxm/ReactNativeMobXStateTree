import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0,
    backgroundColor: Colors.background,
    justifyContent: 'center'
  },
  lowerContent: { flex: 1, flexDirection: 'row', justifyContent: 'space-around'}
})
