import './ImageButton.scss'
import { AppleStoreIcon, GooglePlayIcon } from '../Icon/Icon'
import PropTypes from 'prop-types';

const ImageButton = ({ forElement, icon, className, onClick }) => {
	return (
		<>
			{
				icon ? (
					<div className={`${className} btn-icon-container`} >
						{icon}
					</div>
				) :
					forElement.toString().toLowerCase() === 'chplay' ? (
						<div className='btn-chplay-container' onClick={onClick}>
							<GooglePlayIcon width={"32px"} height={"32px"} />

							<div className='text-container'>
								<h1 className='download'>TẢI VỀ TRÊN</h1>
								<h1 className='store'>Google Play</h1>
							</div>
						</div>
					) : forElement.toString().toLowerCase() === 'appstore' ? (
						<div className='btn-appstore-container' onClick={onClick}>
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

// propTypes
ImageButton.propTypes = {
	forElement: PropTypes.string,
	icon: PropTypes.element,
	className: PropTypes.string,
	onClick: PropTypes.func
};

ImageButton.defaultProps = {
	forElement: '',
	icon: null,
	className: '',
	onClick: () => { }
};

export default ImageButton
