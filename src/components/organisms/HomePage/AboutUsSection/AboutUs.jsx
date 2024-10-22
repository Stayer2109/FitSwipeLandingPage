import React from 'react'
import './AboutUs.scss'
import AboutUsImg from '../../../../assets/images/about_use_img.png'

const AboutUs = () => {
    return (
        <div class="about-section-container">
            <div class="content-wrapper">
                <div class="figure-container">
                    <img src={AboutUsImg} alt="Weightlifter" class="figure-image" />
                </div>

                <div class="text-container">
                    <h1 className='title'>Về chúng tôi</h1>
                    <p className='paragraph'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas scelerisque non leo at dignissim. Ullamcorper eget cras fermentum dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui fermentum semper. Aenean ultricies nullam fusce hendrerit aliquet hendrerit accumsan. Fames senectus faucibus praesent orci class litora suscipit feugiat elementum. Tortor hac urna purus blandit nascetur nulla. Hac quis primis ipsum netus conubia cubilia ipsum. Velit varius nam; porttitor maecenas aptent faucibus mi hendrerit ultrices.ultricies nullam fusce hendrerit aliquet hendrerit accumsan. Fames senectus faucibus praesent orci class litora suscipit feugiat elementum. Tortor hac urna purus blandit nascetur nulla. Hac quis primis ipsum netus conubia cubilia ipsum. Velit varius nam; porttitor maecenas aptent faucibus mi hendrerit ultrices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
