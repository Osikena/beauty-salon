import React from 'react'

function LandingPageSubHeader(props) {
  return (
    <div>
        
        <h5 id='LandingPageSubHeader-main-text'>{props.maintext1}<span id='LandingPageSubHeader-main-sub-text'>{props.maintext2}</span>{props.maintext3}</h5>
        <p id='LandingPageSubHeader-sub-text-1'>{props.subtext1}</p>
        <p id='LandingPageSubHeader-sub-text-2'>{props.subtext2}</p>
      
    </div>
  )
}

export default LandingPageSubHeader