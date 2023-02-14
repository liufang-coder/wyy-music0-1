import SongTitle from '@/components/song-title'
import { getSongListAction } from '@/store/modules/songs'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SongList from './cpns/song-list'
import { PlayListWrapper } from './style'

const PlayList = memo((props) => {
  const {songRes} = useSelector((state) => ({
    songRes:state.songs.songsInfo
  }),shallowEqual)
  const { playlists = [],total = 0 } = songRes
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongListAction(1))
  },[dispatch])

  return (
    <PlayListWrapper>
      <div className="width_wrapper980">
        <div className="padding_wrapper">
          <SongTitle/>
          <SongList playlists={playlists} total={total}/>
        </div>
      </div>
    </PlayListWrapper>
  )
})


export default PlayList