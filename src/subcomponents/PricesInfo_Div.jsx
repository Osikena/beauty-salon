import React from 'react'

function PricesInfo_Div(props) {
  return (
    <div className='text-start' id='PricesInfo_Div-main'>
      <h5 id='PricesInfo_Div-main-text'>{props.maintext}<span id='PricesInfo_Div-line'>dgnfhn</span><span id='PricesInfo_Div-main-text-sub'>{props.mainsubtext}</span></h5>
      <p id='PricesInfo_Div-sub-text'>{props.subtext}</p>
    </div>
  )
}

export default PricesInfo_Div
