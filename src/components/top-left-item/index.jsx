import { getPlayListAction } from '@/store/modules/toplist'
import classNames from 'classnames'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LeftWrapper } from './style'

const TopLeftItem = memo((props) => {
    const {listData} = props
    const [currentIndex,setCurrentIndex] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        const id = listData[currentIndex].id
        dispatch(getPlayListAction(id))
    },[dispatch,currentIndex])
    const itemClickHandle = (index) => {
        setCurrentIndex(index)
        const id = listData[index].id
        dispatch(getPlayListAction(id))
    }
  return (
    <LeftWrapper>
        {
            listData.map((item,index) => {
                let header;
                if (index === 0 || index === 4) {
                  header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                }
                return (
                    <div key={item.id}>
                        {header}
                        <div 
                            className={classNames("item",{active:currentIndex === index})}
                            onClick={e => itemClickHandle(index)}
                            >
                            <div className="item-content">
                                <img src={item.coverImgUrl} alt="" />
                                <div className="info">
                                    <p className="name">{item.name}</p>
                                    <p className="update">{item.updateFrequency}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </LeftWrapper>
  )
})

export default TopLeftItem