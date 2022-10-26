import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import BookingInfo_Col from '../../subcomponents/BookingInfo_Col';

function BookingInfo() {
  return (
    <div className="container-fluid" id='BookingInfo-main-container'>

      <div className="row" id='BookingInfo-main-row'>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" id='BookingInfo-main-row-col'></div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8" id='BookingInfo-main-row-col-1'>

          <h5 id='BookingInfo-main-text'>Book <span id='BookingInfo-main-sub-text'>Our Se</span>rvice</h5>
          <p id='BookingInfo-sub-text-1'>Book a service in any of our location to guarantee a slot with our seasoned professional</p>
          <p id='BookingInfo-sub-text-2'>Visit appointment page</p>

          <div className="row" id='BookingInfo-sub-row'>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='BookingInfo-sub-row-col'>

              <BookingInfo_Col placeholder="Name" select1="Date" select2="Select service" />
              
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='BookingInfo-sub-row-col'>

              <BookingInfo_Col placeholder="Phone number" select1="Time" select2="Location" />
              
            </div>

          </div>

          <Form.Control as='textarea' rows={5} placeholder='Drop a message' id='BookingInfo-textarea' />

          <button id='BookingInfo-btn'>Book Now</button>

        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" id='BookingInfo-main-row-col'></div>

      </div>
      
    </div>
  )
}

export default BookingInfo
