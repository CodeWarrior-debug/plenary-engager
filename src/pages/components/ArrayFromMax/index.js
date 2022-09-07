import React from 'react'

export default function ArrayFromMax(props) {

  let maxtoArray = (max) => {
    
    let myArray = [];

    for (let i=0;i>=max;i++){
      myArray.push(i)
    }
    return myArray;
  }


  return (
    <div>{props.number}</div>
  )
}
