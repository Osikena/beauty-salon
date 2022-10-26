import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage_ServicesInfo_Col from '../../subcomponents/LandingPage_ServicesInfo_Col'
import ServicesInfo1 from '../../icons/ServicesInfo 1.svg'
import ServicesInfo2 from '../../icons/ServicesInfo 2.svg'
import ServicesInfo3 from '../../icons/ServicesInfo 3.svg'
import ServicesInfo4 from '../../icons/ServicesInfo 4.svg'
import ServicesInfo5 from '../../icons/ServicesInfo 5.svg'
import ServicesInfo6 from '../../icons/ServicesInfo 6.svg'

function ServicesInfo() {
  return (
    <div className="container-fluid" id='ServicesInfo-main-container'>

        <h5 id='ServicesInfo-main-text'>Ou<span id='ServicesInfo-main-sub-text'>r Serv</span>ices</h5>
        <p id='ServicesInfo-sub-text'>We offer the best beauty service with best facility and experiences staff</p>

        <div className="row gx-10 gy-10" id='ServicesInfo-row-1'>

            <LandingPage_ServicesInfo_Col imageicon={ServicesInfo1} maintext={"Hair styling/ braiding"} subtext1={"We make the best of styles"} 
            subtext2={"and braids offering you"} subtext3={"elegance"} />

            <LandingPage_ServicesInfo_Col imageicon={ServicesInfo2} maintext={"Hair cutting"} subtext1={"We offer you the best cut"} 
            subtext2={"that suite your looks thus"} subtext3={"radiating beauty"} />

            <LandingPage_ServicesInfo_Col imageicon={ServicesInfo3} maintext={"Hair washing"} subtext1={"We offer deep hair"} 
            subtext2={"conditioning wash"} subtext3={"for healthy hair"} />
            
            <LandingPage_ServicesInfo_Col imageicon={ServicesInfo4} maintext={"Hair tinting"} subtext1={"We make tinting looking"} 
            subtext2={"beautiful and elegance"} subtext3={"on you in any colour"} />

            <LandingPage_ServicesInfo_Col imageicon={ServicesInfo5} maintext={"Pedicure/manicure"} subtext1={"Our manicure and pedicure"} 
            subtext2={"service is what your naila and"} subtext3={"feet needs"} />

            <LandingPage_ServicesInfo_Col imageicon={ServicesInfo6} maintext={"Beauty and spa"} subtext1={"With our beauty spa you"} 
            subtext2={"will feeling and looking "} subtext3={"relaxed"} />
            
        </div>

        <div className='text-end' id='ServicesInfo-div'>
            <a href="#" id='ServicesInfo-div-text'>Visit service page</a>
        </div>
    </div>
  )
}

export default ServicesInfo
