import React, { memo } from 'react'
import { ItemWrapper } from './style'

const AlbumItem = memo((props) => {
    const {itemData,itemWidth = "25%",size = "100px",width = "118px",bgp = "-570px"} = props
  return (
    <ItemWrapper itemWidth={itemWidth} size={size} width={width} bgp={bgp}>
      <div className='album-item'>
        <div className="album-img">
          <img src={itemData.picUrl} alt="" />
          <div className="cover sprite_cover"></div>
          <div className="album-play sprite_icon" title='播放'></div>
        </div>
        <div className="album-info">
          <div className="name">{itemData.name}</div>
          <div className="artist">{itemData.artist.name}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default AlbumItem