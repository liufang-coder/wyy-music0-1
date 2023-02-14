import AlbumItem from '@/components/album-item'
import TitleBar from '@/components/title-bar'
import { Carousel } from 'antd'
import React, { memo, useRef } from 'react'
import { AlbumWrapper } from './style'

const NewAlbum = memo((props) => {
    const {albumData} = props
    const albumRef = useRef()
  return (
    <AlbumWrapper>
        <TitleBar title="新碟上架" moreLink="/discover/album"/>
        <div className="album-content">
            <div className="album-wrapper" >
                <Carousel ref={albumRef} dots={false}>
                    {
                        [0,1].map(item => {
                            return (
                                <div key={item} className="album-page">
                                {
                                    albumData?.slice(item*5, (item+1)*5).map(item => {
                                        return (
                                            <AlbumItem itemData={item} key={item.id}/>
                                        )
                                    })
                                }
                            </div>
                            )

                        })
                    }
                </Carousel>

            </div>

            <div className="control">
                <div className="control-left sprite_02" onClick={e => albumRef.current.prev()}></div>
                <div className="control-right sprite_02" onClick={e => albumRef.current.next()}></div>
            </div>
        </div>

    </AlbumWrapper>
  )
})

export default NewAlbum