import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../../themes'
import { Fonts } from "../../../themes";

const IS_ANDROID = Platform.OS === 'android';

export default StyleSheet.create({
  container: {
    paddingTop: IS_ANDROID ? 0 : 10,
    backgroundColor: Colors.transparent,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 99
  },
  content: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  leftContent: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  centerContent: { flex: 1, alignItems: 'center'},
  rightContent: { flex: 1, alignItems: 'center', justifyContent:'flex-end', flexDirection: 'row', marginRight: 15,  },
  title: { color: Colors.snow, fontWeight: 'bold', fontSize: Fonts.size.h5 },
  icon: { color: Colors.snow, fontSize: Fonts.size.h6},
})