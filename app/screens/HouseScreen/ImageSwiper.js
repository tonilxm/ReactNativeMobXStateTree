import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, Image, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'
import { withNavigation } from 'react-navigation'
import Swiper from 'react-native-swiper'
import Styles from './styles/ImageSwiperStyles'
import Header from '../../components/Header/Header';
import AntIcon from 'react-native-vector-icons/dist/AntDesign'
import { Colors, Fonts } from '../../themes';

class ImageSwiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      currentIdx: 0
    }
  }

  componentWillMount() {
    const { images } = this.props
    images.forEach((element, idx) => {
      this.state[idx] = true
    });
  }
  
  renderImages = images => {
    const countImg = images.length
    return(
      images.map((image, idx) => {
        return(
          <TouchableWithoutFeedback key={idx} onPress={() => alert('test')}>
            <View style={Styles.imageContainer}>
              {
                this.state[idx] &&
                <View style={Styles.loadingIndicator}>
                  <ActivityIndicator/>
                </View>
              }
              <FastImage source={{uri: image}} style={Styles.image}
                  onLoad={() => console.log('loading')}
                  onLoadEnd={()=> this.setState({[idx]: false})} />
            </View>
          </TouchableWithoutFeedback>
        )
      }
    ))
  } 
  
  render() {
    const {  currentIdx } = this.state
    const { images, style } = this.props
    return(
      <View style={Styles.container}>
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
        <View style={{ position: 'absolute', top: 0, left: 0}}>
          <Swiper loop={true} height={Styles.image.height} showsPagination={false} onIndexChanged={(idx) => this.setState({currentIdx: idx})}>
            { this.renderImages(images) }
          </Swiper>
        </View>
        <View style={{ height: 'auto', width: 'auto', backgroundColor: Colors.background, position: 'absolute', bottom: 5, right: 5, borderRadius: 8 }}>
          <Text style={{ color: Colors.snow, fontSize: Fonts.size.medium, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 4 }}>{currentIdx + 1}/{images.length}</Text>
        </View>
      </View>
    )
  }
}

ImageSwiper.propTypes = {
  images: PropTypes.array,
  style: PropTypes.object
}

ImageSwiper.defaultProps = {
  images: [],
  style: {}
}
export default withNavigation(ImageSwiper)