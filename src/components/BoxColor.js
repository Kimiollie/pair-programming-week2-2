
import React from 'react'

const BoxColor = (props) => {
    let style = {
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    };
    const hex = ((props.r << 16) | (props.g << 8) | props.b).toString(16);
    const hexNum = '#' + ('000000' + hex).slice(-6);

  return (
    <div className = 'colorBox' style={style}>
      <p>rgb({props.r},{props.g},{props.b})</p>
      <p>{hexNum}</p>

    </div>
  )
}

export default BoxColor