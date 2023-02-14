import SongOperationBar from '@/components/song-operation-bar'
import { formatMonthDay } from '@/utils/format-utils'
import React, { memo } from 'react'
import { TitleWrapper } from './style'

const TitleSection = memo((props) => {
    const {listData} = props
  return (
    <TitleWrapper>
        <div className="img">
          <img src={listData.coverImgUrl} alt="" />
          <div className="cover sprite_cover"></div>
        </div>
        <div className="info">
          <div className="name">{listData.name}</div>
          <div className="update">
            <span>最近更新：{formatMonthDay(listData.updateTime)}</span>
          </div>
          <div className="btn">
            <SongOperationBar favorTitle={`(${listData.subscribedCount})`}
                              shareTitle={`(${listData.shareCount})`}
                              downloadTitle="下载"
                            commentTitle={`(${listData.commentCount})`}/>
          </div>

        </div>
    </TitleWrapper>
  )
})

export default TitleSection