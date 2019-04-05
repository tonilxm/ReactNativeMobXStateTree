import React, { Component } from 'react'
import { Dimensions, Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native'
import Styles from './styles/HomeScreenStyles'
import HeaderMenu from './HeaderMenu'
import { Colors } from '../../themes'
import SlidingBanner from '../../components/SlidingBanner/SlidingBanner';
import { Banners } from '../../services/fixtures';
import ServiceContent from './ServiceContents';

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
       
    }
  }

  render () {
      
    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" />
        <HeaderMenu/>
        <View style={Styles.body}>
          <ScrollView
            style={{ flex: 1 }}
            scrollEventThrottle={200}
            directionalLockEnabled={true}>
              <SlidingBanner data={Banners} withPagination={false} />
              <ServiceContent/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.45;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export default HomeScreen
