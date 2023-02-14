import React, { memo } from 'react';

import { OperationBarWrapper } from './style';

export default memo((props) => {
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;

  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="/abc" className="play-icon sprite_button2">
          <span className="play sprite_button2">
            <i className="sprite_button2"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon sprite_button2">+</a>
      </span>
      <a href="/abc" className="item sprite_button2">
        <i className="icon favor-icon sprite_button2">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button2">
        <i className="icon share-icon sprite_button2">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button2">
        <i className="icon download-icon sprite_button2">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button2">
        <i className="icon comment-icon sprite_button2">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
