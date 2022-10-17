import 'bootstrap/dist/css/bootstrap.min.css'

function LandingPage_ServicesInfo_Col(props) {
  return (
    <div className="col-xs-12 col-sm- 12 col-md-12 col-lg-4" id='ServicesInfo_Col-main-cont'>

        <div className="row gy-5" id='ServicesInfo_Col-main-row'>

            <div className="col-xs-12 col-sm- 12 col-md-12 col-lg-3" id='ServicesInfo_Col-sub-cont-1'>
                <img src={props.imageicon} alt="imageicon" id='image-icon' height={35} width={35} />
            </div>

            <div className="col-xs-12 col-sm- 12 col-md-12 col-lg-9" id='ServicesInfo_Col-sub-cont-2'>
                <h5 id='ServicesInfo_Col-main-text'>{props.maintext}</h5>
                <p id='ServicesInfo_Col-sub-text-1'>{props.subtext1}</p>
                <p id='ServicesInfo_Col-sub-text-2'>{props.subtext2}</p>
                <p id='ServicesInfo_Col-sub-text-3'>{props.subtext3}</p>
            </div>

        </div>

    </div>
  )
}

export default LandingPage_ServicesInfo_Col
