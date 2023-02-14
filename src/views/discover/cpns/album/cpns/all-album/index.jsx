import PaginationUi from '@/base-ui/pagination-ui'
import AlbumItem from '@/components/album-item'
import TitleBar from '@/components/title-bar'
import { getAllAlbumAction } from '@/store/modules/album'
import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AllAlbumWrapper } from './style'

const AllAlbum = memo(() => {
  const titles = ['全部','华语','欧美','韩国','日本']
  const [currentPage,setCurrentPage] = useState(1)
  const {allAlbumInfo,allAlbumTotal} = useSelector((state) => ({
    allAlbumInfo:state.album.allAlbumInfo,
    allAlbumTotal:state.album.allAlbumTotal
  }),shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAlbumAction(1))
  },[dispatch])


  const onPageChange = (page) => {
    setCurrentPage(page)
    dispatch(getAllAlbumAction(page))
  }
  return (
    <AllAlbumWrapper>
        <div className="padding_wrapper">
            <TitleBar title="全部新碟" titles={titles} isShow={false}/>
            <div className="all-albums">
              {
                allAlbumInfo.map(item => {
                  return <AlbumItem 
                          itemData={item} 
                          itemWidth="20%" 
                          size="130px" 
                          width="153px" 
                          bgp="-845px"
                          key={item.id}
                  />
                }) 
              }
            </div>
            <div className="page-bar">
              <PaginationUi 
                currentPage={currentPage}
                total={allAlbumTotal} 
                pageSize={30}
                onPageChange={onPageChange}/>
            </div>
        </div>
    </AllAlbumWrapper>
  )
})

export default AllAlbum