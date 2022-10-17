import 'bootstrap/dist/css/bootstrap.min.css'
import AboutUsInfo1 from '../../images/About Us Info 1.svg'
import AboutUsInfo2 from '../../images/About Us Info 2.svg'
import AboutUsInfo3 from '../../images/About Us Info 3.svg'

function AboutUsInfo() {
  return (
    <div className="container-fluid" id='AboutUsInfo-main-container'>

        <div className="row" id='AboutUsInfo-row'>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-start" id='AboutUsInfo-col-1'>
              <h5 id='AboutUsInfo-main-text'><span id='AboutUsInfo-main-sub-text'>About</span> us</h5>
              <p id='AboutUsInfo-sub-text-1'>Welcome to the best hair salon where we specialise in</p>
              <p id='AboutUsInfo-sub-text-2'>making you look and feel beautifulabout yourself</p>

              <p id='AboutUsInfo-sub-text-3'>With our experienced hair dresser with the best</p>
              <p id='AboutUsInfo-sub-text-4'>of machines and equipment money can ever afford</p>

              <p id='AboutUsInfo-sub-text-5'>Estabished in 2000 starz specialises in ensuring you appear</p>
              <p id='AboutUsInfo-sub-text-6'>elegent in your new made hair ready to take on the world</p>
              <button id='AboutUsInfo-button'>Learn more</button>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='AboutUsInfo-col-2' style={{ backgroundImage: `url(${AboutUsInfo3})` }}>
                <img src={AboutUsInfo1} alt="AboutUsInfo2" id='AboutUsInfo-image-1' />
                <img src={AboutUsInfo2} alt="AboutUsInfo2" id='AboutUsInfo-image-2' />
            </div>

        </div>
        
    </div>
  )
}

export default AboutUsInfo
