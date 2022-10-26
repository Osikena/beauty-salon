import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/LandingPage.css'
import '../pagescss/LandingPageResponsive.css'
import TopNav from '../components/LandingPageComponents/TopNav'
import Banner from '../components/LandingPageComponents/Banner'
import BelowBanner from '../components/LandingPageComponents/BelowBanner'
import AboutUsInfo from '../components/LandingPageComponents/AboutUsInfo'
import ServicesInfo from '../components/LandingPageComponents/ServicesInfo'
import PricesInfo from '../components/LandingPageComponents/PricesInfo'
import BookingInfo from '../components/LandingPageComponents/BookingInfo'
import GalleryInfo from '../components/LandingPageComponents/GalleryInfo'
import Testimonials from '../components/LandingPageComponents/Testimonials'

function LandingPage() {
  return (
    <div className="container-fluid" id='landing-page-main-container'>

        <TopNav />

        <Banner />

        <BelowBanner />

        <AboutUsInfo />

        <ServicesInfo />

        <PricesInfo />

        <BookingInfo />

        <GalleryInfo />

        <Testimonials />

    </div>
  )
}

export default LandingPage
