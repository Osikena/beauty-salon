import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';

function BookingInfo_Col(props) {
  return (
    <Form>
        <Form.Control type='text' placeholder={props.placeholder} id='BookingInfo_Col-text-1' />

        <Form.Select id='BookingInfo_Col-select-1'>
            <option>{props.select1}</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </Form.Select>

        <Form.Select id='BookingInfo_Col-select-2'>
            <option>{props.select2}</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </Form.Select>
    </Form>
  )
}

export default BookingInfo_Col
