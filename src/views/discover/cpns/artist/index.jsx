import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ArtistWrapper } from './style'

const Artist = memo((props) => {
  return (
    <ArtistWrapper>Artist</ArtistWrapper>
  )
})

Artist.propTypes = {}

export default Artist