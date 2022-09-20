import React from 'react'

export default function Test() {

    const mytab1 = document.getElementById('mytab1')

    const storeItems = () => {

    let storeArr=[];
    for (let row of mytab1.rows) 
    {
        for(let cell of row.cells) 
        {
           let val = cell.innerText; // your code below
           storeArr.push(val);
        }
    }
    console.log(storeArr);
}

const Button = () => {
    <button style={{"min-height":"100px"}} type='button' onClick={storeItems}>Swap Items</button>
}

  return (
        <>
    
    <button onClick={storeItems}>
        Store Verses
      </button>

      <table id="mytab1">
  <thead>
    <tr>
      <th>header1</th>
      <th>header2</th>
      <th>header3</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>text1.1</td>
       <td>text1.2</td>
       <td>text1.3</td>
     </tr>
     <tr>
       <td>text2.1</td>
       <td>text2.2</td>
       <td>text2.3</td>
     </tr>
     <tr>
       <td>text3.1</td>
       <td>text3.2</td>
       <td>text3.3</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>
</>
  )
}
