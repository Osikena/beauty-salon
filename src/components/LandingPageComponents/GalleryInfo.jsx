import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import GalleryInfo1 from '../../images/GalleryInfo 1.svg'
import GalleryInfo2 from '../../images/GalleryInfo 2.svg'
import GalleryInfo3 from '../../images/GalleryInfo 3.svg'
import GalleryInfo4 from '../../images/GalleryInfo 4.svg'

function GalleryInfo() {
  return (
    <div className="container-fluid" id='GalleryInfo-main-container'>

        <h5 id='GalleryInfo-main-text'>Last<span id='BookingInfo-main-sub-text'>est Gal</span>lery</h5>
        <p id='GalleryInfo-sub-text'>Recent photos of our services to satisfied clients</p>

        <Carousel>

            <Carousel.Item>
                <img src={GalleryInfo1} alt='First Slide' className='d-block w-100' height={500} />
            </Carousel.Item>

            <Carousel.Item>
                <img src={GalleryInfo2} alt='First Slide' className='d-block w-100' height={500} />
            </Carousel.Item>

            <Carousel.Item>
                <img src={GalleryInfo3} alt='First Slide' className='d-block w-100' height={500} />
            </Carousel.Item>

            <Carousel.Item>
                <img src={GalleryInfo4} alt='First Slide' className='d-block w-100' height={500} />
            </Carousel.Item>

        </Carousel>
          
    </div>
  )
}

export default GalleryInfo
