import React, { memo } from 'react'
import AllAlbum from './cpns/all-album'
import HotAlbum from './cpns/hot-album'
import { AlbumWrapper } from './style'

const Album = memo((props) => {
  return (
    <AlbumWrapper>
      <div className="album-content width_wrapper980">
        <HotAlbum />
        <AllAlbum/>
      </div>
    </AlbumWrapper>
  )
})


export default Album