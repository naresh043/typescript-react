import React from 'react'
type ContainerProp={
    style:React.CSSProperties;
}

function Container(props:ContainerProp) {
  return (
    <div style={props.style}>Container</div>
  )
}

export default Container