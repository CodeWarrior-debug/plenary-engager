import React from 'react'
import "./styles.css"

export default function Test() {

    const mytab1 = document.getElementById('originalsTab1')

    const storeItems = () => {

    let storeArr=[];
    for (let row of mytab1.rows) 
    {
        for(let cell of row.cells) 
        {
           let val = cell.innerText; // your code below
           storeArr.push(val);
           console.log(row);
        }
    }
    console.log(storeArr);
}

  return (
        <>
    
    <button onClick={storeItems}>
        Store Verses
      </button>
<div class="wrapper">

      <table id="originalsTab1">
  <thead>
    <tr>
      <th>header1</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>text1.1</td>
       <td>text1.2</td>
       <td>text1.3</td>
     </tr>
  </tbody>
</table>


<table id="replaceTab1">
  <thead>
    <tr>
      <th>header1</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>text1.1</td>
       <td>text1.2</td>
       <td>text1.3</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>
</div>
</>
  )
}
