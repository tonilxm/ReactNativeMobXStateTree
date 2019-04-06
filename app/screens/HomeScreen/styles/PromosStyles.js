import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../themes'
import Fonts from "../../../themes/Fonts";

const itemPadding = 5
const { itemWidth, itemHeight } = { itemWidth: 120, itemHeight: 180 }

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.snow,
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  title: { fontSize: Fonts.size.h6, fontWeight: 'bold', letterSpacing: 0.6, color: Colors.black },
  buttonTitle: { fontSize: Fonts.size.small, marginVertical: 2, marginHorizontal: 8, color: Colors.snow },
  scrollContent: { flex: 1, paddingVertical: 2 },
  contentItem: { 
    width: itemWidth + 1, 
    height: itemHeight, 
    marginRight: itemPadding,  
    /* shadow + elevation
    borderColor: Colors.cloud, borderWidth: 0.3, borderTopWidth: 0,
    shadowColor: Colors.cloud,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,*/
  },
  imageContainer: { overflow: 'hidden', borderTopLeftRadius: 7, borderTopRightRadius: 7},
  image: { width: itemWidth, height: 140 },
  descriptionContentItem: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.background},
  description: { fontSize: Fonts.size.medium, color: Colors.snow},
})
