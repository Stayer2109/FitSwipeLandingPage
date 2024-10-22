import React from 'react'
import './ImageButton.scss'
import { AppleStoreIcon, GooglePlayIcon } from '../Icon/Icon'

const ImageButton = ({ forElement, icon, className }) => {
    return (
        <>
            {
                icon ? (
                    <div className={`${className} btn-icon-container`} >
                        {icon}
                    </div>
                ) :
                    forElement.toString().toLowerCase() === 'chplay' ? (
                        <div className='btn-chplay-container' >
                            <GooglePlayIcon width={"32px"} height={"32px"} />

                            <div className='text-container'>
                                <h1 className='download'>TẢI VỀ TRÊN</h1>
                                <h1 className='store'>Google Play</h1>
                            </div>
                        </div>
                    ) : forElement.toString().toLowerCase() === 'appstore' ? (
                        <div className='btn-appstore-container' >
                            <AppleStoreIcon color={"#FFF"} width={"32px"} height={"32px"} />

                            <div className='text-container'>
                                <h1 className='download'>TẢI VỀ TRÊN</h1>
                                <h1 className='store'>APP STORE</h1>
                            </div>
                        </div>
                    ) : (null)}
        </>
    )
}

export default ImageButton
