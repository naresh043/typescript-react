import React from 'react'
type ButtonProp={
    handleClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
}

function Button(props:ButtonProp) {
  return (
    <button onClick={props.handleClick}>Clicked</button>
  )
}

export default Button