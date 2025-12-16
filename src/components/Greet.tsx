import React from 'react'

type greetProp={
    name:string

}

function Greet(prop:greetProp) {
  return (
    <div>Greet {prop.name}</div>
  )
}

export default Greet