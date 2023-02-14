import { Pagination } from 'antd'
import React, { memo } from 'react'
import { PaginationWrapper } from './style';

const PaginationUi = memo((props) => {
  const {currentPage,total,onPageChange,pageSize} = props
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <div className='control left sprite_button'><span className='text'>上一页</span></div>;
    }

    if (type === 'next') {
      return <div className='control right sprite_button'><span className='text'>下一页</span></div>;
    }
    return originalElement;
  };
  return (
    <PaginationWrapper>
        <Pagination
            className="pagination"
            size="small"
            current={currentPage}
            defaultCurrent={1}
            total={total}
            pageSize={pageSize}
            showSizeChanger={false}
            itemRender={itemRender}
            onChange={onPageChange}
        />
    </PaginationWrapper>
  )
})

export default PaginationUi