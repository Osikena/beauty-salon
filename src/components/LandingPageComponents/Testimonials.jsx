import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPageSubHeader from '../../subcomponents/LandingPageSubHeader'
// import Testimonials1 from '../../images/Testimonials 1.svg'
import BannerImage from '../../images/BannerImage.svg'

function Testimonials() {
  return (
    <div className="container-fluid" id='Testimonials-main-container' >

        <LandingPageSubHeader maintext1={"What O"} maintext2={"ur Clie"} maintext3={"nt Says"} 
        subtext1={"What our Clent thinks of our service"} subtext2={""} />

        <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4"></div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4"></div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4"></div>
            
        </div>

    </div>
  )
}

export default Testimonials
