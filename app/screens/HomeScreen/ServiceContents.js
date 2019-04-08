import React, { Component } from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import { Images } from '../../themes'
import Styles from './styles/ServiceContentStyle'
import { ImageButton } from '../../components/ImageButton';

class ServiceContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
       
    }
  }

  render () {
    return (
      <Swiper style={Styles.container}
        dot={<View style={Styles.dot} />}
        activeDot={<View style={Styles.activeDot} />}
        paginationStyle={{ bottom: 0 }}
        loop={false}>
        <View style={Styles.slideContent}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <ImageButton icon={Images.house} label='Sewa Rumah' style={Styles.button}/>
            <ImageButton icon={Images.apartment} label='Sewa Apartement' style={Styles.button}/>
            <ImageButton icon={Images.bedroom} label='Sewa Kostan' style={Styles.button}/>
            <ImageButton icon={Images.car} label='Sewa Mobil' style={Styles.button}/>  
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <ImageButton icon={Images.motor} label='Sewa Motor' style={Styles.button}/>
            <ImageButton icon={Images.babysitter} label='Sewa BabySitter' style={Styles.button}/>
            <ImageButton icon={Images.servant} label='Sewa Assiten RT' style={Styles.button}/>
            <ImageButton icon={Images.heavy} label='Sewa Alat Berat' style={Styles.button}/>
          </View>
        </View>
      </Swiper>
    )
  }
}

export default ServiceContent
