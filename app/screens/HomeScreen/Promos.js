import React, { Component } from 'react'
import {View, Text, ScrollView, Image, TouchableWithoutFeedback} from 'react-native'
import Styles from './styles/PromosStyles'
import Images from "../../themes/Images"
import { Button } from '../../components/Button';
import { Colors, Fonts } from '../../themes';

class Promos extends Component {
  constructor (props) {
    super(props)
    this.state = {
       
    }
  }

  _onPressButton() {
    alert('Test')
  }

  render () {
    return (
      <View style={Styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={Styles.title}>Promo</Text>
          <Button title='Lihat Semua' titleStyle={Styles.buttonTitle}/>
        </View>
        <ScrollView style={Styles.scrollContent}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          directionalLockEnabled={true}>
          <View style={Styles.contentItem}>
            <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.house1} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.15jt/Thn</Text>
            </View>
          </View>
          <View style={Styles.contentItem }>
           <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.house2} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.16jt/Thn</Text>
            </View>
          </View>
          <View style={Styles.contentItem}>
            <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.house3} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.13jt/Thn</Text>
            </View>
          </View>
          <View style={Styles.contentItem}>
            <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.house4} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.9jt/Thn</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Promos
