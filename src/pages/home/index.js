import React from "react";
import {get} from "axios";


export default function Home() {

    const getVerseRange = async () => {
        try {
        const response = await get('https://bible-api.com/john%203:16?translation=kjv'); //TODO: make dynamic
            console.log(response.data.text);
            return(response.data.text);
        } catch (error) {
            console.error(error);
        }
        
    }

    const replaceVerbiage = (originalText) => {


    }

// import axios from 'axios';

// const axios = require('axios').default;





// // const testVerses = "16 Then the Lord raised up judges,[c] who saved them out of the hands of these raiders. 17 Yet they would not listen to their judges but prostituted themselves to other gods and worshiped them. They quickly turned from the ways of their ancestors, who had been obedient to the Lord’s commands. 18 Whenever the Lord raised up a judge for them, he was with the judge and saved them out of the hands of their enemies as long as the judge lived; for the Lord relented because of their groaning under those who oppressed and afflicted them."

// originalsArr = [];
// replacesArr = [];




// var element = document.getElementById("#id");
// element.addEventListener('click', function(){
// 	console.log(myVerseRange);
// });

// document.getElementById("swap-btn").addEventListener("click", swapItems);



// var table = document.getElementById("swap-tbl");
// //iterate trough rows

// function swapItems(){
   
//    for (var i = 0, row; row = table.rows[i]; i++) {
//       //go through first column
//       for (var j = 0, col; col = 0; j++) {

//          originalsArr.push(row.cell[j].textContent)

//       }
//    }
//    console.log(originalsArr)
// }

// if (table){
   
//    var substitutionVerses = testVerses;

// for (i=0;i<originalsArr.length;i++) {
//    var replaced = originalsArr[i];
//    var replacer = replacesArr[i];
//    var replaceFunc = new RegExp(replaced,"g");
//    substitutionVerses=substitutionVerses.replace(replaceFunc, replacer)
// }
// }
// // console.log(substitutionVerses);


  return (
    <>
      <h1>Interpretext Generator</h1>
      <div>
        Pick a passage, then choose words in the passage to replace & their
        replacements. Convey the sense of Scripture that may come across better
        in another language, or in another translation!
      </div>

      <table style={{margin: "50px auto"}}>
        <th>Scripture Passage</th>
        <tr>
          <td style={{border: "1px solid"}} id="original" > 
            Then the Lord raised up judges,[c] who saved them out of the hands
            of these raiders. 17 Yet they would not listen to their judges but
            prostituted themselves to other gods and worshiped them. They
            quickly turned from the ways of their ancestors, who had been
            obedient to the Lord’s commands. 18 Whenever the Lord raised up a
            judge for them, he was with the judge and saved them out of the
            hands of their enemies as long as the judge lived; for the Lord
            relented because of their groaning under those who oppressed and
            afflicted them.
            {/* <div dangerouslySetInnerHTML={getVerseRange()}/> */}
            
          </td>
        </tr>
      </table>
      <button id="import-btn" onClick={getVerseRange} style={{textAlign: "center"}}>Import Verses</button>

                <th>Original</th>
                <th>Replacement</th>
      <table id='swap-tbl' style={{margin: "50px auto", border: "1px solid"}}>
                <tr>
                    <td>judge</td>
                    <td>tribal chieftain</td>
                </tr>
                <tr>
                    <td>raider</td>
                    <td>marauder</td>
                </tr>
            </table>

            <button id='swap-btn' style={{textAlign: "center"}}>Re-word Now!</button>
            
                <th>Passage Re-worded</th>
            <table style={{margin: "50px auto;"}}>
                <tr> 
            <td style={{border: "1px solid"}} id="replacer">
                Then the Lord raised up judges,[c] who saved them out of the hands of these raiders. 17 Yet they would not listen to their judges but prostituted themselves to other gods and worshiped them. They quickly turned from the ways of their ancestors, who had been obedient to the Lord’s commands. 18 Whenever the Lord raised up a judge for them, he was with the judge and saved them out of the hands of their enemies as long as the judge lived; for the Lord relented because of their groaning under those who oppressed and afflicted them.
            </td>
          </tr>
        </table>
    </>
  );
}
