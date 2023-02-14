import React, { memo } from 'react'
import { NavWrapper } from './style'
import { dicoverMenu } from '@/assets/data/local-data'
import { NavLink } from 'react-router-dom'
const DiscoverNav = memo((props) => {

  return (
    <NavWrapper>
      <div className="discover-menu">
        {
          dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })
        }
      </div>
    </NavWrapper>
  )
})

export default DiscoverNav 