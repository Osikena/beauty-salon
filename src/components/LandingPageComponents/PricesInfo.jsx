import 'bootstrap/dist/css/bootstrap.min.css'
import PricesInfo_Div from '../../subcomponents/PricesInfo_Div'

function PricesInfo() {
  return (
    <div className="container-fluid" id='PricesInfo-main-container'>

        <h5 id='PricesInfo-main-text'>Ou<span id='PricesInfo-main-sub-text'>r Pric</span>es</h5>
        <p id='PricesInfo-sub-text'>We offer affordable prices across all our services</p>

        <div className="row" id='PricesInfo-row'>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5" id='PricesInfo-col-1'>

            <PricesInfo_Div maintext={"Hair cutting"} mainsubtext={"$20"} 
            subtext={"Hair cut is within this range"} />

            <PricesInfo_Div maintext={"Pedicure/manicure"} mainsubtext={"$50"} 
            subtext={"Pedicure and manicure is within this range"} />

            <PricesInfo_Div maintext={"Beauty and spa"} mainsubtext={"$70"} 
            subtext={"Guaranteed beauty spa with this price"} />

            <PricesInfo_Div maintext={"Hair styling"} mainsubtext={"$60"} 
            subtext={"This involve hair drying"} />

          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" id='PricesInfo-col-2'></div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5" id='PricesInfo-col-3'>

            <PricesInfo_Div maintext={"Hair washing"} mainsubtext={"$5"} 
            subtext={"Intensive wash is guaranteed"} />

            <PricesInfo_Div maintext={"Hair tinting"} mainsubtext={"$10"} 
            subtext={"Depending on the colour"} />

            <PricesInfo_Div maintext={"Hair braids"} mainsubtext={"$2"} 
            subtext={"Depends on the quantity of braids"} />

          </div>

        </div>

    </div>
  )
}

export default PricesInfo
