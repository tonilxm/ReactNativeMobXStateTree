import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../themes'

const IS_ANDROID = Platform.OS === 'android';

export default StyleSheet.create({
  container: {
    paddingTop: IS_ANDROID ? 0 : 10,
    backgroundColor: Colors.background,
    height: 100,
    justifyContent: 'space-around',
    borderColor: Colors.snow,
  },
  upperContent: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  lowerContent: { flex: 1, flexDirection: 'row', justifyContent: 'space-around'},
  leftUpperContent: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  centerUpperContent: { flex: 1, alignItems: 'center'},
  rightUpperContent: { flex: 1, alignItems: 'center', justifyContent:'space-around', flexDirection: 'row' },
  title: { color: Colors.snow, fontWeight: 'bold', fontSize: Fonts.size.h5 },
  iconWithTextContainer: { justifyContent: 'space-around', alignItems: 'center'},
  icon: { color: Colors.snow, fontSize: Fonts.size.h6},
  iconText: { color: Colors.snow }
})