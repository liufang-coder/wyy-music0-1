import SongItem from '@/components/song-item'
import TitleBar from '@/components/title-bar'
import React, { memo } from 'react'
import { RecommendWrapper } from './style'

const HotRecommend = memo((props) => {
    const {hotRecommendInfo} = props
    const titles = ['华语','流行','摇滚','民谣','电子']

  return (
    <RecommendWrapper>
        <TitleBar title="热门推荐" moreLink="/discover/playlist" titles={titles} />
        <div className="songs">
        {
            hotRecommendInfo?.slice(0,8).map(item => {
            return <SongItem itemData={item} key={item.id} isPlayList={false}/>
            })
        }
        </div>
    </RecommendWrapper>
  )
})

export default HotRecommend