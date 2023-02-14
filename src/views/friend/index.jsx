import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FriendWrapper } from './style'

const Friend = memo((props) => {
  return (
    <FriendWrapper>
        <AppHeader/>
        <AppFooter/>
    </FriendWrapper>
  )
})

Friend.propTypes = {}

export default Friend