import 'bootstrap/dist/css/bootstrap.min.css'
import CustomerReview from '../../icons/Customer Review.svg'
import HairCare from '../../icons/Hair Care.svg'
import Rating from '../../icons/Rating.svg'
import BelowBanner_Col from '../../subcomponents/BelowBanner_Col'

function BelowBanner() {
  return (
    <div className="container-fluid" id='below-banner-main-container'>

        <div className="row gy-5" id='below-banner-row'>

            <BelowBanner_Col imageicon={Rating} maintext={"Over 10+"} subtext={"Years of experience"} />
            
            <BelowBanner_Col imageicon={HairCare} maintext={"Over 100+"} subtext={"Experienced stylist"} />
            
            <BelowBanner_Col imageicon={CustomerReview} maintext={"Over 50K+"} subtext={"Satisfied customer"} />
            
        </div>
        
    </div>
  )
}

export default BelowBanner
