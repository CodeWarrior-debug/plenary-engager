import { React, useState } from "react";
import axios from "axios";
import "./styles.css"

export default function Home() {
  const getVerseRangeTest = async () => {
    // return  "First &middot; Second";
    await axios
      .get("https://bible-api.com/john%203:16?translation=kjv") //TODO: make dynamic
    //   .then((response) => {
    //     console.log(response.data.text);
    //   })
      .then((response) => {
        return response.data.text
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const myVerse = "John 3:16";
  //const myVerse = getVerseRangeTest();

  //   const getVerseRangeTest = async () => {
  //     const response = await getVerseRangeTest2();
  //     console.log('you made it bro' + response)
  //    }

  //   const replaceVerbiage = (originalText) => {};

  // // const testVerses = "16 Then the Lord raised up judges,[c] who saved them out of the hands of these raiders. 17 Yet they would not listen to their judges but prostituted themselves to other gods and worshiped them. They quickly turned from the ways of their ancestors, who had been obedient to the Lord’s commands. 18 Whenever the Lord raised up a judge for them, he was with the judge and saved them out of the hands of their enemies as long as the judge lived; for the Lord relented because of their groaning under those who oppressed and afflicted them."

  // originalsArr = [];
  // replacesArr = [];

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

      <th>Scripture Passage</th>
      <table style={{ margin: "50px auto" }}>
        <tbody>
          <tr>
            <td
              style={{ border: "1px solid" }}
              id="original"
              // dangerouslySetInnerHTML={getVerseRangeTest()}
            >
              {/* <div dangerouslySetInnerHTML={{__html: getVerseRangeTest() }} /> */}
              {/* Then the Lord raised up judges,[c] who saved them out of the hands
            of these raiders. 17 Yet they would not listen to their judges but
            prostituted themselves to other gods and worshiped them. They
            quickly turned from the ways of their ancestors, who had been
            obedient to the Lord’s commands. 18 Whenever the Lord raised up a
            judge for them, he was with the judge and saved them out of the
            hands of their enemies as long as the judge lived; for the Lord
            relented because of their groaning under those who oppressed and
            afflicted them. */}

              {myVerse}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        id="import-btn"
        // onClick={getVerseRangeTest}
        style={{ textAlign: "center" }}
      >
        Import Verses
      </button>
      <th>Original</th>
      <th>Replacement</th>
      <table id="swap-tbl" style={{ margin: "50px auto", border: "1px solid" }}>
        <tbody>
          <tr>
            <td>judge</td>
            <td>tribal chieftain</td>
          </tr>
          <tr>
            <td>raider</td>
            <td>marauder</td>
          </tr>
        </tbody>
      </table>

      <button id="swap-btn" style={{ textAlign: "center" }}>
        Re-word Now!
      </button>

      <th>Passage Re-worded</th>
      <table style={{ margin: "50px auto;" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid" }} id="replacer">
              Then the Lord raised up judges,[c] who saved them out of the hands
              of these raiders. 17 Yet they would not listen to their judges but
              prostituted themselves to other gods and worshiped them. They
              quickly turned from the ways of their ancestors, who had been
              obedient to the Lord’s commands. 18 Whenever the Lord raised up a
              judge for them, he was with the judge and saved them out of the
              hands of their enemies as long as the judge lived; for the Lord
              relented because of their groaning under those who oppressed and
              afflicted them.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
