import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Platform, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { sliderWidth, itemWidth } from './styles/SlideEntry.style'
import SliderEntry from './SliderEntry'
import styles from './styles/SlidingBannerStyle'
import { Colors } from '../../themes'

class SlidingBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    }
  }
  
  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={false}
          parallaxProps={parallaxProps}
        />
    );
}

  render () {
    const { data, withPagination } = this.props;
    const { slider1ActiveSlide } = this.state;
    return (
      <View style={styles.container}>
            <Carousel
              ref={c => this._slider1Ref = c}
              data={data}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
            {withPagination && <Pagination
              dotsLength={data.length}
              activeDotIndex={slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor={Colors.steel}
              dotStyle={styles.paginationDot}
              inactiveDotColor={Colors.black}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this._slider1Ref}
              tappableDots={!!this._slider1Ref}
            />}
        </View>
    )
  }
}

SlidingBanner.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  withPagination: PropTypes.bool,
}

SlidingBanner.defaultProps = {
  withPagination: false
}

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

export default SlidingBanner