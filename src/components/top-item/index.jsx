import React, { memo } from 'react'
import { ItemWrapper } from './style'

const TopItem = memo((props) => {
  const {listData,itemWidth = "230px"} = props
  const {tracks = []} = listData
  return (
    <ItemWrapper itemWidth={itemWidth}>
      <div className="title">
        <div className="img">
          <img src={listData?.coverImgUrl} alt="" />
          <div className="cover sprite_cover"></div>
        </div>
        <div className="info">
          <div className="name">
            <h3>{listData?.name}</h3>
          </div>
          <div className="icon-info">
            <i className='play-icon sprite_02' title='播放'></i>
            <i className='add-icon sprite_02' title='收藏'></i>
          </div>
        </div>
      </div>
      <div className="song-list">
        {
          tracks?.slice(0,11).map((item,index) => {
            return (
              <div className="song-item" key={item.id}>
                <span className='index'>{index + 1}</span>
                <span className='name'>{item.name}</span>
                <div className="show-btn">
                  <i className='btn sprite_02 play-icon' title='播放'></i>
                  <i className='sprite_icon2 addto' title='添加到播放列表'></i>
                  <i className='btn sprite_02 add-icon' title='收藏'></i>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="all"></div>
    </ItemWrapper>
  )
})

export default TopItem