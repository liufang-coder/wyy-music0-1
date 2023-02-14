import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import DiscoverNav from '@/components/discover-nav'
import { fetchAlbumDataAction } from '@/store/modules/album'
import { fetchRadioAction } from '@/store/modules/djradio'
import { fetchRecommendDataAction } from '@/store/modules/recommend'
import { fetchSongAction } from '@/store/modules/songs'
import { fetchTopListAction } from '@/store/modules/toplist'
import React, { memo, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { DiscoverWrapper } from './style'

const Discover = memo((props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchAlbumDataAction())
    dispatch(fetchSongAction())
    dispatch(fetchTopListAction())
    dispatch(fetchRadioAction())
  },[dispatch])
  return (
    <DiscoverWrapper>
      <AppHeader/>
      <DiscoverNav/>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      <AppFooter/>
    </DiscoverWrapper>
  )
})
 

export default Discover