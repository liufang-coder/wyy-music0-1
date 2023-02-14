import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import { footerImages,footerLinks } from '@/assets/data/local-data'
const AppFooter = memo((props) => {
  return (
    <FooterWrapper>
      <div className='header'>
        {
          footerImages.map(item => {
            return (
              <div className="item" key={item.title}>
                <a className="link foot_icon" href={item.link} rel="noopener noreferrer" target="_blank"></a>
                <div className='title'>{item.title}</div>
              </div>
            )
          })
        }
      </div>
      <div className="info">
        <div className="info-link">
          {
            footerLinks.map(item => {
              return (
                <div className="item" key={item.title}>
                  <a className='title' href={item.link} target="_blank">{item.title}</a>
                  <span className='line'>|</span>
                </div>
              )
            })
          }
        </div>
        <div className="info2">
          <a className='info-a' href="https://jubao.163.com/" target="_blank">廉正举报</a>
          <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
          <span className='info-span'>客服热线：95163298</span>
        </div>
        <div className="info3">
          <span>互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198</span>
          <a className='info-a' href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤B2-20090191-18工业和信息化部备案管理系统网站</a>
        </div>
        <div className="info4">
          <span>网易公司版权所有©1997-2023 杭州乐读科技有限公司运营：浙网文[2021] 1186-054号  浙公网安备 33010902002564号</span>
        </div>
      </div>


    </FooterWrapper>
  )
})

AppFooter.propTypes = {}

export default AppFooter