import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: Colors.background,
    height: 120,
    justifyContent: 'space-around',
    borderColor: Colors.snow,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  upperContent: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  lowerContent: { flex: 1, flexDirection: 'row', justifyContent: 'space-around'},
  leftUpperContent: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  centerUpperContent: { flex: 1, alignItems: 'center'},
  rightUpperContent: { flex: 1, alignItems: 'center', justifyContent:'space-around', flexDirection: 'row' },
  title: { color: Colors.snow, fontWeight: 'bold', fontSize: Fonts.size.h5 },
  iconWithTextContainer: { justifyContent: 'space-around', alignItems: 'center'},
  icon: { color: Colors.snow, fontSize: Fonts.size.h5},
  iconText: { color: Colors.snow }
})