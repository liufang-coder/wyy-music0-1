import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { MyWrapper } from './style'

const My = memo((props) => {
  return (
    <MyWrapper>
      <AppHeader/>
      <AppFooter/>
    </MyWrapper>
  )
})

My.propTypes = {}

export default My