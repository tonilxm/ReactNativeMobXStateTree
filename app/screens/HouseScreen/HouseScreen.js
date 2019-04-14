import React, { Component } from 'react'
import { View, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { withNavigation } from 'react-navigation'
import ImageSwiper from './ImageSwiper'
import Styles from './styles/HouseScreenStyle'
import Header from '../../components/Header/Header';
import AntIcon from 'react-native-vector-icons/dist/AntDesign'
import { Colors } from '../../themes';
import MapView from 'react-native-maps';

class HouseScreen extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const house = this.props.navigation.getParam('house', [])
    return(
      <View>
        <Header 
          left={
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.goBack()}>
              <View style={{ width: 32, height: 32, borderRadius: 32, backgroundColor: Colors.background, alignItems: 'center', 
                justifyContent: 'center'}}>             
                <AntIcon style={Styles.icon} name='arrowleft'></AntIcon>
              </View>
            </TouchableWithoutFeedback>}
          right={
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
              <TouchableWithoutFeedback onPress={()=>this.props.navigation.goBack()} >
                <View style={{ width: 32, height: 32, borderRadius: 32, backgroundColor: Colors.background, alignItems: 'center', 
                  justifyContent: 'center' }}>
                  <AntIcon style={Styles.icon} name='bells'></AntIcon>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>this.props.navigation.goBack()} >
                <View style={{ width: 32, height: 32, borderRadius: 32, backgroundColor: Colors.background, alignItems: 'center', 
                  justifyContent: 'center', marginLeft: 5 }}>
                  <AntIcon style={Styles.icon} name='shoppingcart'></AntIcon>
                </View> 
              </TouchableWithoutFeedback>
            </View>}/>
        <View style={Styles.container}>
          <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={200}
              directionalLockEnabled={true}>
            <ImageSwiper images={house.images}/>
            <View style={{ height: 300, width: 'auto' }}>
              <MapView
                style={{flex: 1}}
                region={{
                  latitude: 42.882004,
                  longitude: 74.582748,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }  
}

export default withNavigation(HouseScreen)