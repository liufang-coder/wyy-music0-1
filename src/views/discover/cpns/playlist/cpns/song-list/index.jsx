import PaginationUi from '@/base-ui/pagination-ui'
import SongItem from '@/components/song-item'
import { getSongListAction } from '@/store/modules/songs'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ListWrapper } from './style'

const SongList = memo((props) => {
    const {playlists,total} = props
    const [currentPage,setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    const onPageChange = (page) => {
        setCurrentPage(page)
        dispatch(getSongListAction(page))
      }
  return (
    <ListWrapper>
        <div className="songs-content">
            {
                playlists.map(item => {
                    return <SongItem 
                                itemData={item} 
                                key={item.id}
                                itemWidth="20%"
                            />
                })
            }
        </div>
        <PaginationUi 
            currentPage={currentPage} 
            total={total}
            pageSize={30}
            onPageChange={onPageChange}
             />
    </ListWrapper>
  )
})

export default SongList