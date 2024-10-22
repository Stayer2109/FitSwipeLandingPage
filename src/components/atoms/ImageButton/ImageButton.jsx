import React from 'react'
import './ImageButton.scss'
import { AppleStoreIcon, GooglePlayIcon } from '../Icon/Icon'

const ImageButton = ({ forElement }) => {
    return (
        <>
            {forElement.toString().toLowerCase() === 'chplay' ? (
                <div className='btn-chplay-container' >
                    <GooglePlayIcon width={"32px"} height={"32px"} />

                    <div className='text-container'>
                        <h1 className='download'>TẢI VỀ TRÊN</h1>
                        <h1 className='store'>Google Play</h1>
                    </div>
                </div>
            ) : (
                <div className='btn-appstore-container' >
                    <AppleStoreIcon color={"#FFF"} width={"32px"} height={"32px"} />

                    <div className='text-container'>
                        <h1 className='download'>TẢI VỀ TRÊN</h1>
                        <h1 className='store'>APP STORE</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default ImageButton
