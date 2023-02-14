import { changeCurrentIdAction } from '@/store/modules/djradio'
import { Carousel } from 'antd'
import classNames from 'classnames'
import React, { memo, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { CategoryContent, CategoryItemImage, HeaderWrapper } from './style'
const PAGE_SIZE = 16;

const HeaderSection = memo(() => {
    const {radioCategoriesInfo,currentId} = useSelector((state) => ({
        radioCategoriesInfo:state.djradio.radioCategoriesInfo,
        currentId:state.djradio.currentId
    }),shallowEqual)
    const dispatch = useDispatch()
    const page = Math.ceil(radioCategoriesInfo.length / PAGE_SIZE) || 1;
    const carouselRef = useRef()
    function getSize(index) {
        return index * PAGE_SIZE > radioCategoriesInfo.length ? index * PAGE_SIZE : radioCategoriesInfo.length;
    }
  return (
    <HeaderWrapper>
        <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
        <CategoryContent>
            <Carousel dots={{className: "dots"}} ref={carouselRef}>
                {
                    Array(page).fill(0).map((_, index) => {
                        return (
                            <div className="type-header" key={index}>
                                {
                                    radioCategoriesInfo.slice(index * PAGE_SIZE, getSize(index + 1)).map(item => {
                                        return (
                                            <div
                                                key={item.id} 
                                                onClick={e => dispatch(changeCurrentIdAction(item.id))}
                                                className={classNames("item",{"active": currentId === item.id})}>
                                                <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                                                <span>{item.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
        </CategoryContent>
        <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
    </HeaderWrapper>
  )
})

export default HeaderSection