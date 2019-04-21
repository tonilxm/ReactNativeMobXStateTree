import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Image,TouchableWithoutFeedback } from 'react-native'
import Styles from './styles/PromotionBannersStyles'
import Swiper from "react-native-swiper";
import FastImage from 'react-native-fast-image'
import { Banners } from '../../services/fixtures/Banners';
import { withNavigation } from 'react-navigation';

class PromotionBanners extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  
  showDetailScreen = (house) => this.props.navigation.navigate('HouseScreen', { house })
  
  renderBanner = () => {
    const data = Banners;
    return data.map(house => 
      <TouchableWithoutFeedback key={house.id} onPress={() => this.showDetailScreen(house)}>
        <View style={Styles.slideContent}>
          <FastImage source={{uri: house.illustration}} style={{ height: 140, width: 'auto' }}
                     resizeMode={FastImage.resizeMode.cover} resizeMethod='scale'/>
        </View>
      </TouchableWithoutFeedback>
      
    )
  }
  
  render () {
    return (
      <Swiper style={Styles.container}
        dot={<View style={Styles.dot} />}
        activeDot={<View style={Styles.activeDot} />}
        paginationStyle={{ bottom: 4 }}
        loop={false}>
        { this.renderBanner() }
      </Swiper>
    )
  }
}


export default withNavigation(PromotionBanners)
