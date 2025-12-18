import React from 'react'
type AllHeaddingsProp={
    children:React.ReactNode;
}

function AllHeaddings(props:AllHeaddingsProp) {
  return (
    <>
    <h1>This is the Children props</h1>
    <div>{props.children}</div>
    </>
  )
}

export default AllHeaddings