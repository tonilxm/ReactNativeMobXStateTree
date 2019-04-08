import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../themes'

export const padding = 5;
export const itemWidth = (Metrics.screenWidth - (padding * 6)) / 2;
    
export default StyleSheet.create({
  padding: padding,
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.snow,
    paddingHorizontal: padding * 2,
    paddingVertical: 5
  },
  title: { fontSize: Fonts.size.h6, fontWeight: 'bold', letterSpacing: 0.6, color: Colors.black },
  
  rowContainer: { height: 200, width: itemWidth, marginBottom: padding,  flexDirection: 'row'},
  imageContiner: { overflow: 'hidden', borderRadius: 3 },
  image: { width: itemWidth + 1, height: 148},
  descriptionContainer: { flex: 1, backgroundColor: Colors.snow, paddingHorizontal: 2, paddingVertical: 2, 
        justifyContent: 'space-between' },
  description: { fontSize: Fonts.size.small, fontWeight: 'bold' },
  price: { fontSize: Fonts.size.small, fontWeight: 'bold', color: Colors.fire },
})
