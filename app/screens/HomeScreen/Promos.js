import React, { Component } from 'react'
import {View, Text, ScrollView, Image, TouchableWithoutFeedback} from 'react-native'
import Styles from './styles/PromosStyles'
import Images from "../../themes/Images"
import { Button } from '../../components/Button';

class Promos extends Component {
  constructor (props) {
    super(props)
    this.state = {
       
    }
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
          <View style={Styles.contentItem}>
            <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.car2} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.300rb/Hr</Text>
            </View>
          </View>
          <View style={Styles.contentItem}>
            <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.motor6} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.50rb/Hr</Text>
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
          <View style={Styles.contentItem }>
           <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.motor1} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.60rb/Hr</Text>
            </View>
          </View>
          <View style={Styles.contentItem }>
           <View style={Styles.imageContainer}>
              <Image style={Styles.image} source={Images.house4} resizeMode='cover'resizeMethod='scale'/>
            </View>
            <View style={Styles.descriptionContentItem}>
              <Text style={Styles.description}>Rp.35jt/Thn</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Promos
