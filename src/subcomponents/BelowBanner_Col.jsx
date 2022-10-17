import 'bootstrap/dist/css/bootstrap.min.css'

function BelowBanner_Col(props) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='below-banner-col'>

        <div className="container text-center align-middle" id='below-banner-sub-container'>

            <img src={props.imageicon} alt="rating" height={50} width={50} />
            <p id='below-banner-main-text'>{props.maintext}</p>
            <p id='below-banner-sub-text'>{props.subtext}</p>

        </div>
        
    </div>
  )
}

export default BelowBanner_Col
