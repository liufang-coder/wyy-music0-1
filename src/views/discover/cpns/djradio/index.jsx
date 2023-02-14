import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HeaderSection from './cpns/header-section'
import NewRadioSection from './cpns/new-radio-section'
import RankingRadioSection from './cpns/ranking-radio-section'
import { RadioWrapper } from './style'

const DjRadio = memo((props) => {
  return (
    <RadioWrapper className='width_wrapper980'>
      <HeaderSection/>
      <NewRadioSection/>
      <RankingRadioSection/>
    </RadioWrapper>
  )
})

DjRadio.propTypes = {}

export default DjRadio