import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import LeftSection from './cpns/left-section'
import PlaySection from './cpns/play-section'
import TitleSection from './cpns/title-section'
import { TopListWrapper } from './style'

const TopList = memo((props) => {
  const {playListInfo} = useSelector((state) => ({
    playListInfo:state.toplist.playListInfo
  }),shallowEqual)
  const tracks = playListInfo.tracks || []
  return (
    <TopListWrapper className='width_wrapper980'>
      <LeftSection/>
      <div className="right">
        <TitleSection listData={playListInfo}/>
        <PlaySection tracks={tracks}/>
      </div>
    </TopListWrapper>
  )
})

TopList.propTypes = {}

export default TopList
