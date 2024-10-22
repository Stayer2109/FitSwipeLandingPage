import React, { useState, useEffect } from 'react';
import OfferImage1 from '../../../../assets/images/offer_img1.png';
import OfferImage2 from '../../../../assets/images/offer_img2.png';
import OfferImage3 from '../../../../assets/images/offer_img3.png';
import OfferImage4 from '../../../../assets/images/offer_img4.png';
import './OfferSection.scss';
import { ChatIcon, DumbbellIcon, MoneyIcon, WebsiteIcon } from '../../../atoms/Icon/Icon';

const OfferSection = () => {
    const [offerData, setOfferData] = useState([]);
    const [willingToDo, setWillingToDo] = useState([]);

    useEffect(() => {
        // Array of offers
        const offerList = [
            { imgSource: OfferImage1, title: 'Đặt mục tiêu', description: 'Đặt mục tiêu cụ thể để có động lực và theo dõi tiến trình.' },
            { imgSource: OfferImage2, title: 'Tìm Đối Tác', description: 'Tìm kiếm đối tác tập luyện để tạo sự khích lệ.' },
            { imgSource: OfferImage3, title: 'Tham Gia Hoạt Động', description: 'Tham gia các hoạt động xã hội như sự kiện thể thao để nâng cao thể lực.' },
            { imgSource: OfferImage4, title: 'Chia Sẻ Kinh Nghiệm', description: 'Chia sẻ kinh nghiệm và thành tích qua mạng xã hội để nhận phản hồi.' },
        ];

        // Array of willing actions with icons
        const willingToDoList = [
            { iconSource: <MoneyIcon width={"128px"} height={"128px"} />, description: 'Cố gắng cho bạn trải nghiệm tốt nhất với khoảng tiền vừa phải.' },
            { iconSource: <ChatIcon width={"128px"} height={"128px"} />, description: 'Sẵn sàng hỗ trợ khi bạn có thắc mắc hay vấn đề gì' },
            { iconSource: <DumbbellIcon width={"128px"} height={"128px"} />, description: 'Đặt sức khỏe của bạn lên hàng đầu' },
            { iconSource: <WebsiteIcon width={"128px"} height={"128px"} color={"black"} />, description: 'Lắng nghe ý kiến của mọi người với dịch vụ chúng thôi' },
        ];

        // Set the data into state
        setOfferData(offerList);
        setWillingToDo(willingToDoList);
    }, []);

    return (
        <div className='offer-willing-container'>
            <div className="offer-container">
                <h1>Chúng tôi có thể cho bạn</h1>

                <div className='offer-item-container'>
                    {offerData.map((offer, index) => (
                        <div key={index} className="offer-card">
                            <img src={offer.imgSource} alt={offer.title} className="offer-image" />
                            <h2>{offer.title}</h2>
                            <p>{offer.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="willing-container">
                <h1>Chúng tôi sẽ</h1>

                <div className='willing-item-container'>
                    {willingToDo.map((willing, index) => (
                        <div key={index} className="willing-card">
                            <div className='icon-container'>
                                {willing.iconSource}
                            </div>
                            <p>{willing.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfferSection;
