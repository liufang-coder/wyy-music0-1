import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { BarWrapper } from './style'

const TitleBar = memo((props) => {
  const {title,titles,moreLink,isShow = true} = props
  return (
    <BarWrapper>
        <div className="title-content">
          { isShow && <div className="icon"></div>}
            <div className='title'>
              <NavLink to={moreLink}>{title}</NavLink>
            </div> 
            <div className="nav-title">
              {
                titles?.map(item => {
                  return (
                    <div className='title-item' key={item}>
                      <NavLink>{item}</NavLink>
                      <span className='item-hr'>|</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {
            isShow && (
              <div className="more">
                <NavLink to="/discover/playlist">更多</NavLink>
                <i className='icon'></i>
              </div>
            )
          }

    </BarWrapper>
  )
})

export default TitleBar