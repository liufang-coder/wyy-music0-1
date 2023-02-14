import CarouselUi from '@/base-ui/carousel-ui'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HotRecommend from './cpns/hot-recommend'
import NewAlbum from './cpns/new-album'
import TopList from './cpns/top-list'
import { RecommendsWrapper } from './style'

const Recomends = memo((props) => {
  const {hotRecommendInfo,newAlbumInfo} = useSelector((state) => ({
    hotRecommendInfo:state.recommend.hotRecommendInfo,
    newAlbumInfo:state.recommend.newAlbumInfo
  }),shallowEqual)
  return (
    <RecommendsWrapper>
      <CarouselUi/>
      <div className="content width_wrapper980">
        <div className="left">
          <HotRecommend hotRecommendInfo={hotRecommendInfo}/>
          <NewAlbum albumData={newAlbumInfo}/>
          <TopList/>
        </div>
        <div className='right'></div>
      </div>
    </RecommendsWrapper>
  )
})

export default Recomends