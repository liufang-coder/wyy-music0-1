import React, { memo } from 'react'
import { TitleWrapper } from './style'

const SongTitle = memo(() => {
  return (
    <TitleWrapper>
        <div className="title-content">
            <div className="title">流行</div>
            <div className="hot sprite_button">
                <a href="">热门</a>
            </div>
        </div>

    </TitleWrapper>
  )
})

export default SongTitle