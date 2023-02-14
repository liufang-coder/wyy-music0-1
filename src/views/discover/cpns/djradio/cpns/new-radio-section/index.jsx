import NewRadioCover from '@/components/new-radio-cover'
import TitleBar from '@/components/title-bar'
import { getNewRadioAction } from '@/store/modules/djradio'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NewWrapper } from './style'

const NewRadioSection = memo(() => {
    const {newRadiosInfo,currentId} = useSelector((state) => ({
        newRadiosInfo:state.djradio.newRadiosInfo,
        currentId:state.djradio.currentId
    }),shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentId === 0) return;
        dispatch(getNewRadioAction(currentId))
    },[dispatch,currentId])
  return (
    <NewWrapper>
        <TitleBar title="优秀新电台" isShow={false}/>
        <div className="radio-list">
        {
          newRadiosInfo.slice(0, 5).map((item) => {
            return (<NewRadioCover info={item} key={item.id}/>)
          })
        }
      </div>
    </NewWrapper>
  )
})

export default NewRadioSection