import React, { Component } from 'react'
import {Text, View, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { withNavigation } from 'react-navigation'
import ImageSwiper from './ImageSwiper'
import Styles from './styles/HouseScreenStyle'
import { Colors, Fonts } from '../../themes';
import { Rating } from 'react-native-ratings';
import HTML from 'react-native-render-html';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from '../../components/Button';

class HouseScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFullDescription: false
    }
  }
  
  toggleShowDescription = () => {
    this.setState({ showFullDescription: !this.state.showFullDescription })
  }
  render() {
    const { showFullDescription } = this.state;
    const house = this.props.navigation.getParam('house', [])
    return(
      <View style={Styles.container}>
        <ScrollView>
          <ImageSwiper images={house.images} />
          <View style={{ padding: 10, height: 'auto', width: 'auto', backgroundColor: Colors.snow, justifyContent: 'space-around' }}>
            <Text style={{ fontSize: Fonts.size.regular, fontWeight: 'bold', marginBottom: 3}}>{house.title}</Text>
            <Text style={{ fontSize: Fonts.size.medium, fontWeight: '500', color: Colors.bloodOrange, marginBottom: 3}}>{house.price}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Rating startingValue={4.7} ratingCount={5} imageSize={12}
                style={{marginRight: 5, backgroundColor: Colors.transparent}}/>
              <Text style={{marginRight: 5, fontSize: Fonts.size.small, fontWeight: 'bold', color: Colors.grey}}>({house.ratingCount})</Text>
              <Text style={{marginRight: 5, fontSize: Fonts.size.small, fontWeight: 'bold', color: Colors.grey}}>|</Text>
              <Text style={{marginRight: 5, fontSize: Fonts.size.small, fontWeight: 'bold', color: Colors.grey}}>{house.viewTimes} Dilihat</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 2}}>
            <View style={{ flex: 1}}>
              <Text>Luas Tanah 150</Text>
              <Text>Luas Bangunan 70</Text>
              <Text>2 Kamar Tidur </Text>
              <Text>2 Kamar Mandi</Text>
              <Text>1 Car Port</Text>
            </View>

            <MapView
              style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 2, height: 150, width: 'auto', elevation: 2}}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: -2.9734016,
                longitude: 104.7473484,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
              }}>
              <Marker
                coordinate={{ latitude: -2.9734016, longitude: 104.7473484}}
                title={'My Home'}
                description={'My Home'}
              />
            </MapView>
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 2}}>
            <View style={{paddingVertical: 0}}>
              <Text style={{ fontSize: Fonts.size.regular, letterSpacing: 0.5, fontWeight: 'bold'}}>
                Deskripsi
              </Text>
            </View>
            <View>
              <HTML html={(!showFullDescription && house.description.length > 200) ? `${house.description.substring(0, 200)}...` : house.description}/>
              {
                house.description.length > 200 && !showFullDescription &&
                <Text style={{ color: Colors.background }} onPress={() => this.toggleShowDescription() }>Baca Selengkapnya</Text>
              }
            </View>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Button title={'Call'} titleStyle={{ color: Colors.snow, fontWeight: '600'}} 
              buttonStyle={{ flex: 1, height: 50, width: '100%', backgroundColor: Colors.bloodOrange}}/>
            <Button title={'Whatsapp'} titleStyle={{ color: Colors.snow, fontWeight: '600'}} 
              buttonStyle={{ flex: 1, height: 50, width: '100%', backgroundColor: Colors.facebook}}/>
          </View>
        </ScrollView>
      </View>
    )
  }  
}

export default withNavigation(HouseScreen)