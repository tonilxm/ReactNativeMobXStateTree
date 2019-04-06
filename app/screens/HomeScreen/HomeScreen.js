import React, { Component } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import SlidingBanner from '../../components/SlidingBanner/SlidingBanner';
import { Banners } from '../../services/fixtures';

// Contents Style Import
import Styles from './styles/HomeScreenStyles'

// Contents Import
import HeaderMenu from './HeaderMenu'
import ServiceContent from './ServiceContents';
import Promos from "./Promos";


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
        <HeaderMenu title='Rapoku'/>
        <View style={Styles.body}>
          <ScrollView
            style={{ }}
            scrollEventThrottle={200}
            directionalLockEnabled={true}>
              <SlidingBanner data={Banners} withPagination={false} />
              <ServiceContent/>
              <Promos/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default HomeScreen