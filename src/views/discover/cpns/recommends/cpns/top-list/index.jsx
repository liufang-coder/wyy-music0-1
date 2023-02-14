import TitleBar from '@/components/title-bar'
import TopItem from '@/components/top-item'
import { getTopData } from '@/store/modules/recommend'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { TopWrapper } from './style'

const TopList = memo(() => {
  const dispatch = useDispatch()
  const {upListInfo,newListInfo,originListInfo} = useSelector((state) => ({
    upListInfo:state.recommend.upListInfo,
    newListInfo:state.recommend.newListInfo,
    originListInfo:state.recommend.originListInfo
  }),shallowEqual)
    // hooks
    useEffect(() => {
      dispatch(getTopData(19723756));
      dispatch(getTopData(3779629));
      dispatch(getTopData(2884035));
    }, [dispatch])
  return (
    <TopWrapper>
          <TitleBar title="榜单" moreLink="/discover/toplist"/>
          <div className="toplist">
            <TopItem listData={upListInfo}/>
            <TopItem listData={newListInfo}/>
            <TopItem listData={originListInfo} itemWidth="228px"/>
          </div>
    </TopWrapper>
  )
})

export default TopList