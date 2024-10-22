import React from 'react'
import AppIcon from '../../../assets/images/app_icon_white.png'
import './Footer.scss'
import { EmailIcon, PhoneIcon, WebsiteIcon } from '../../atoms/Icon/Icon'

const Footer = () => {
  return (
    <div className='page-footer-container'>
      {/* ICON CONTAINER */}
      <div className='first-section'>
        <div className='page-icon-container'>
          <div className='icon-img'>
            <img src={AppIcon} alt="App Icon" />
          </div>

          <div className='title-container'>
            <h1><strong>FitSwipe</strong></h1>
            <h5>App tìm người phục vụ cho sức khoẻ của bạn</h5>
          </div>
        </div>

        <div className='copyright-container'>
          <p>© 2021 FitSwipe. All Rights Reserved</p>
        </div>


      </div>

      {/* SECOND CONTAINER */}
      <div className='second-section'>
        <ul className='terms-items-container'>
          <li className="item-title"><a href="">Thông tin pháp lý</a></li>
          <li className="item"><a href="">Chính sách bảo mật</a></li>
          <li className="item"><a href="">Điều khoản sử dụng</a></li>
          <li className="item"><a href="">Giấy chứng nhận</a></li>
        </ul>

        <ul className='linked-page-container'>
          <li className="item-title"><a href="">Trang liên kết</a></li>
          <li className="item">
            <img src="" alt="" />
            <a href="">Facebook</a>
          </li>
          <li className="item"><a href="">Twitter</a></li>
          <li className="item"><a href="">TikTok</a></li>
          <li className="item"><a href="">Instagram</a></li>
          <li className="item"><a href="">LinkedIn</a></li>
        </ul>

        <ul className='contact-us-container'>
          <li className="item-title"><a href="">Liên hệ chúng tôi</a></li>
          <li className="item">
            <PhoneIcon width={"28px"} height={"28px"} color={"white"} />
            <a href="">Hotline: fitswipesupport@gmail.com </a></li>
          <li className="item">
            <EmailIcon width={"28px"} height={"28px"} color={"white"} />
            <a href="">Email: 0392683829</a>
          </li>
          <li className="item">
            <WebsiteIcon width={"28px"} height={"28px"} color={"white"} />
            <a href="">Website: www.fitswipeofficial.com</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer