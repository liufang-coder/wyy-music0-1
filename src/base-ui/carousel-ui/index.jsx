import { Carousel } from 'antd'
import React, { memo, useCallback, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { CarouselWrapper } from './style'

const CarouselUi = memo((props) => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const {bannerInfo} = useSelector((state) => ({
    bannerInfo:state.recommend.bannerInfo
  }),shallowEqual)
  const bannerRef = useRef()
  const bannerChange = useCallback((current) => {
    setCurrentIndex(current)
  },[])
  const bgImage = bannerInfo[currentIndex] && (bannerInfo[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <CarouselWrapper bgImage={bgImage}>
      <div className="banner-img">
        <Carousel afterChange={bannerChange} ref={bannerRef}>
          {
            bannerInfo.map((item) => {
              return (
                <div className='item' key={item.imageUrl}>
                  <img src={item.imageUrl} alt="" />
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className="banner-control">
        <div className="btn left" onClick={e => bannerRef.current.prev()}></div>
        <div className="btn right" onClick={e => bannerRef.current.next()}></div>
      </div>
    </CarouselWrapper>
  )
})


export default CarouselUi