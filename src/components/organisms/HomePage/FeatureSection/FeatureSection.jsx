import React from 'react'
import PTImage1 from '../../../../assets/images/pt/pt1.png'
import PTImage6 from '../../../../assets/images/pt/pt6.png'
import './FeatureSection.scss'
import { ArrowIcon, HeartIcon, PTChatIcon, StarIcon } from '../../../atoms/Icon/Icon'
import ImageButton from '../../../atoms/ImageButton/ImageButton'
import ScreenImg1 from '../../../../assets/images/pt/page-screen1.png'
import ScreenImg2 from '../../../../assets/images/pt/page-screen.png'


const FeatureSection = () => {
    return (
        <div className='feature-container'>

            {/* FAVORITE FEATURE */}
            <div className='favorite-pt-container'>
                <div className='text-content'>
                    <h1>Thả tim với PT yêu thích</h1>
                    <p>Lấy ý tưởng từ khả năng “vuốt” độc lạ của một số ứng dụng hẹn hò thịnh hành hiện tại. FitSwipe được xây dựng từ nền tảng vuốt và tương hợp cực kỳ đơn giản và thú vị, giúp khách hàng có thể dễ dàng xem hồ sơ và tương hợp với những người mình mong muốn.</p>
                </div>

                <div className='images-container'>
                    <div className='img1-wrapper'>
                        <img src={PTImage1} alt="" className='img1' />

                        <div className='information-section'>
                            {/* SAMPLE AVATAR */}
                            <div className='avatar-container'>
                                <img src={PTImage1} alt="" className='img1-avatar' />
                            </div>

                            {/* PERSONAL INFORMATION */}
                            <div className='personal-information'>
                                <div className='content'>
                                    <h3>Nguyễn A</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                </div>
                                <div className='rating'>
                                    <StarIcon height={"32px"} />
                                    <p>5/5</p>
                                </div>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className='feature-btn-container'>
                            <ImageButton icon={<StarIcon width={"26px"} height={"26px"} />} className={"btn-rating"} />
                            <ImageButton icon={<HeartIcon width={"34px"} height={"34px"} />} className={"btn-favorite"} />
                            <ImageButton icon={<PTChatIcon width={"26px"} height={"26px"} />} className={"btn-chat"} />
                            <div className='arrow-meaning'>
                                <ArrowIcon width={"34px"} height={"34px"} />
                                <p>1 chạm để có sức khoẻ</p>
                            </div>
                        </div>
                    </div>
                    <img src={PTImage1} alt="" className='img2' />
                    <img src={PTImage6} alt="" className='img3' />
                    <img src={PTImage6} alt="" className='img4' />
                    <img src={PTImage1} alt="" className='img5' />
                </div>
            </div>

            {/* TRAINING COUPLES */}
            <div className='training-couple-container'>
                {/* FIRST SECTION */}
                <div className='first-section'>
                    <div className='text-content'>
                        <h2>Bắt cặp với PT</h2>
                        <h1>PT. Trần A</h1>
                    </div>
                    <div className='divine-line' />
                    <div className='images-container'>
                        <div className='first-img'>
                            <img src={PTImage6} alt="" />

                            <div className='avatar-container'>
                                <img src={PTImage6} alt="" className='avatar-img' />
                                <div className='information-container'>
                                    <h3>Nguyễn A</h3>
                                    <h4>20</h4>
                                </div>
                            </div>
                        </div>

                        <div className='second-img'>
                            <img src={PTImage1} alt="" />

                            <div className='avatar-container'>
                                <img src={PTImage1} alt="" className='avatar-img' />
                                <div className='information-container'>
                                    <h3>Nguyễn A</h3>
                                    <h4>20</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECOND SECTION */}
                <div className='second-section'>
                    <h1>Cặp đôi hoàn hảo để rèn luyện</h1>
                    <p>Qua khả năng tương hợp dễ dàng, các học viên và PT có thể tìm đến nhau một cách tối ưu và thoải mái hơn. Từ đó bắt đầu phát triển con đường đồng hành riêng của cả hai.</p>
                    <div className="divine-line" />
                </div>
            </div>

            {/* OTHERS */}
            <div className='others-container'>
                {/* FIRST SECTION */}
                <div className='first-section'>
                    <h1>Và còn nhiều hơn thế nữa</h1>
                    <p>Ngoài ra, những tính năng khác cũng sẽ tạo nên một trải nghiệm thú vị cho người dùng như đặt lịch, xem lịch, các bài tập mẫu.</p>
                    <div className="divine-line" />
                </div>

                {/* SECOND SECTION */}
                <div className='second-section'>
                    <div className="green-box" />
                    <div className='first-img'>
                        <img src={ScreenImg1} alt="" />
                    </div>
                    <div className='second-img'>
                        <img src={ScreenImg2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection
