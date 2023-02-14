import AlbumItem from '@/components/album-item'
import TitleBar from '@/components/title-bar'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { HotAlbumWrapper } from './style'

const HotAlbum = memo(() => {
    const {hotAlbumInfo} = useSelector((state) => ({
        hotAlbumInfo:state.album.hotAlbumInfo
      }),shallowEqual)
  return (
    <HotAlbumWrapper>
        <div className="padding_wrapper">
            <TitleBar title="热门新碟" isShow={false}/>
            <div className="hot-content">
                {
                    hotAlbumInfo.slice(0,10).map(item => {
                        return <AlbumItem 
                                itemData={item} 
                                itemWidth="20%" 
                                size="130px" 
                                width="153px" 
                                bgp="-845px"
                                key={item.id}
                                />
                    })
                }
            </div>
        </div>
    </HotAlbumWrapper>
  )
})

export default HotAlbum