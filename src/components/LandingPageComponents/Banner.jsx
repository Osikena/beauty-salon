import 'bootstrap/dist/css/bootstrap.min.css'
import BannerImage from '../../images/BannerImage.svg'
import BannerPlay from '../../icons/BannerPlay.svg'
import BannerRatings from '../../icons/BannerRatings.svg'

function Banner() {
  return (
    <div className="container-fluid" id='banner-container'>
        
        <div className="row" id='banner-row'>

            <div className="col-xs-12 col-lg-6 text-start" id='banner-row-first-col'>

                <div className="container" id='banner-text-container'>
                    <p id='banner-main-text'>The Beauty Of A</p>
                    <p id='banner-main-text-1'>Well<span id='banner-main-text-sub'> Made Hair</span></p>
                    <p id='banner-sub-text'>You’ll leave looking and feeling beautiful about your new looks</p>
                    <p id='banner-sub-text-1'>ready to take on the world with elegance in your steps</p>
                    <span id='banner-videos-text'><button id='banner-button-text'>Get started</button>Watch videos<img src={BannerPlay} alt="bannerplay" id='banner-button-icon' /></span>
                    <p id='banner-awards-text'># NO 1 National best hair salon 2022 Hair Salon Awards</p>
                    <span id='banner-rate-text'><img src={BannerRatings} alt="bannerratings" id='banner-rate-icon' />(1000 voters)</span>
                </div>
                
            </div>

            {/* <div className="col-xs-12 col-lg-6"  id='banner-row-second-col' style={{ backgroundImage: `url(${BannerImage})` }}> */}
            <div className="col-xs-12 col-lg-6"  id='banner-row-second-col'>
                <img src={BannerImage} alt="bannerimage" id='banner-image' />
            </div>

        </div>
    </div>
  )
}

export default Banner
