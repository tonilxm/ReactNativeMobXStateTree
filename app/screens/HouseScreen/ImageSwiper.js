import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import Swiper from 'react-native-swiper'
import Styles from './styles/ImageSwiperStyles'

class ImageSwiper extends Component {
  constructor(props) {
    super(props)
  }
  
  renderImages = images => {
    return(
      images.map((image, idx) => 
        <TouchableWithoutFeedback key={idx} onPress={() => alert('test')}>
          <View style={Styles.imageContainer}>
            <Image source={{uri: image}} style={Styles.image}/>
          </View>
        </TouchableWithoutFeedback>)
    )
  } 
  
  render() {
    const { images } = this.props
    return(
      <Swiper style={Styles.container}
        dot={<View style={Styles.dot} />}
        activeDot={<View style={Styles.activeDot} />}
        paginationStyle={Styles.pagination}
        loop={false}>
        { this.renderImages(images) }
      </Swiper>
    )
  }
}

ImageSwiper.propTypes = {
  images: PropTypes.array
}

ImageSwiper.defaultProps = {
  images: []
}
export default withNavigation(ImageSwiper)