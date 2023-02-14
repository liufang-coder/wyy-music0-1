import { getCount } from '@/utils/format-utils'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const SongItem = memo((props) => {
    const {itemData,itemWidth = "25%",isPlayList = true} = props
  return (
    <ItemWrapper itemWidth={itemWidth}>
        <div className="item">
            <div className="img-info">
                <img src={isPlayList ? itemData.coverImgUrl :itemData.picUrl} alt="" />
                <div className="bg-cover sprite_cover" title={itemData?.name}></div>
                <div className="cover">
                    <div className="playCount">
                        <i className='listen sprite_icon' title='播放'></i>
                        {getCount(itemData?.playCount)}
                    </div>
                    <i className='play sprite_icon'></i>
                </div>
            </div>
            <div className="song-info">
                {itemData?.name} 
            </div>
        </div>
    </ItemWrapper>
  )
})

export default SongItem