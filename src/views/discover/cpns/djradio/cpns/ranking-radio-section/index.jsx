import PaginationUi from '@/base-ui/pagination-ui'
import RadioRankingCover from '@/components/radio-ranking-cover'
import TitleBar from '@/components/title-bar'
import { getRadiosAction } from '@/store/modules/djradio'
import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RankingWrapper } from './style'

const RankingRadioSection = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);

  const {rankingRadiosInfo,currentId} = useSelector((state) => ({
    rankingRadiosInfo:state.djradio.rankingRadiosInfo,
    currentId:state.djradio.currentId
}),shallowEqual)
const dispatch = useDispatch()
useEffect(() => {
  if (currentId === 0) return;
  dispatch(getRadiosAction(currentId,0))
  console.log(currentId);
},[dispatch,currentId])

const onPageChange = (page, pageSize) => {
  setCurrentPage(page);
  dispatch(getRadiosAction(currentId, page));
}
  return (
    <RankingWrapper>
        <TitleBar title="电台排行榜" isShow={false}/>
        <div className="ranking-list">
          {
            rankingRadiosInfo.map(item => {
              return <RadioRankingCover radio={item} key={item.id}/>
            })
          }
        </div>
        <PaginationUi 
            currentPage={currentPage} 
            total={200}
            pageSize={20}
            onPageChange={onPageChange}
             />
    </RankingWrapper>
  )
})

export default RankingRadioSection