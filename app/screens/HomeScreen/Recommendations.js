import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import Styles from './styles/RecommendationStyles'
import { Colors, Images } from '../../themes'

const datas = 
[
  {
    item: [
      {
        id: 1,
        image: Images.house1,
        title: 'Rumah Tipe 54 Sudirman Thamrin Jakarta',
        price: 'Rp.25jt/Thn',
        facilities:['electricity', 'water', 'internet', 'pool']
      },
      {
        id: 2,
        image: Images.car2,
        title: 'MPV Nissan Yamira 2000cc Kol. Atmo Palembang',
        price: 'Rp.150rb/Hr',
        facilities:['aircond']
      }
    ]
  },
  {
    item: [
      { 
        id: 3,
        image: Images.car6,
        title: 'Sedan Toyota Hatchback Yaris, Palembang',
        price: 'Rp.200rb/Hr',
        facilities:['electricity', 'water']
      },
      {
        id: 4,
        image: Images.car5,
        title: 'MPV Toyota Fortuner, Palembang',
        price: 'Rp.300rb/Hr',
        facilities:['electricity', 'water', 'pool']
      }
    ]
  },
  {
    item: [
      {
        id: 5,
        image: Images.house5,
        title: 'Ruko 2Lt LB.120 Pakjo Palembang',
        price: 'Rp.45jt/Thn',
        facilities:['electricity', 'water']
      },
      {
        id: 6,
        image: Images.motor1,
        title: 'Kawasaki Monster 2000cc, Palembang',
        price: 'Rp.250rb/Hr' ,
        facilities:['aircond', 'electricity']
      }
    ]
  }
];

class Recommendations extends Component {
  constructor (props) {
    super(props)
    this.state = {
       
    }
  }
  
  renderItem = (data) => {
    const { item } = data.item
    return(
      <View style={Styles.rowContainer}>
        {
          item.map((content, idx) => {
            return(
              <View key={idx} style={{marginRight: idx===0? Styles.padding:0 }}>
                <View style={Styles.imageContiner}>
                  <Image source={content.image} style={Styles.image} resizeMode='cover' resizeMethod='scale' />
                  <View style={{ position: 'absolute', top: 5, right: 5, backgroundColor: Colors.snow, width: 'auto', 
                    height: 'auto', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                    {content.facilities.map((facility, idxFacility) => 
                      <Image key={idxFacility} source={Images[facility]} style={{height: 18, width: 18, marginHorizontal: 1.5}}/>)}
                  </View>  
                </View>
                <View style={Styles.descriptionContainer}>
                  <Text style={Styles.description}>{content.title}</Text>
                  <Text style={Styles.price}>{content.price}</Text>
                </View>
              </View>  
            )
          })
        }
      </View>
    )
  }

  
  render () {
    return (
      <View style={Styles.container}>
        <View style={{ paddingBottom: 5}}>
          <Text style={Styles.title}>Rekomendasi</Text>  
        </View>
        <View>
          <FlatList data={datas}
          renderItem={item => this.renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}/>
        </View>
      </View>
    )
  }
}

export default Recommendations
