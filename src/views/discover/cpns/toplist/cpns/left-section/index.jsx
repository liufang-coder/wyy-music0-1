import TopLeftItem from '@/components/top-left-item'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { LeftWrapper } from './style'

const LeftSection = memo(() => {
    const {topListInfo} = useSelector((state) => ({
        topListInfo:state.toplist.topListInfo
    }),shallowEqual)
  return (
    <LeftWrapper>
        <div className="left-section">
            <TopLeftItem listData={topListInfo}/>
        </div>
    </LeftWrapper>
  )
})

export default LeftSection