import "./styles.css";
import React, { useState } from "react";

const SwapTextArea = React.memo(props => {
  const [originals, setOriginals] = useState([]);
  const [replacers, setReplacers] = useState([]);
  const mytab1 = document.getElementById("originalsTab1");
  const mytabl2 = document.getElementById("replaceTab1");

  const feedItems = () => {
    let storeArr = [];

    for (let row of mytab1.rows) {
      for (let cell of row.cells) {
        let val = cell.innerText; // your code below
        storeArr.push(val);
      }
    }
    setOriginals(storeArr);
  };

  const feedItems2 = () => {
    let storeArr = [];

    for (let row2 of mytabl2.rows) {
      for (let cell2 of row2.cells) {
        let val = cell2.innerText; // your code below
        storeArr.push(val);
      }
    }
    setReplacers(storeArr);
  };

  const storeItems = () => {
    feedItems();
    feedItems2();
    console.log(originals)
    console.log(replacers)
  };

  const [versesReword, setVersesReword] = useState("");
  
  let substitutionVerses = props.verses;

  const processReword = () => {
    
    
    storeItems();
    swapItems();

  }

  const swapItems = () => {
    if (!substitutionVerses || !originals || !replacers) {
      setVersesReword("");
      return "";
    }


    for (let i = 0; i < originals.length; i++) {
      let replaced = originals[i];
      let replacer = replacers[i];
      const replaceFunc = new RegExp(replaced, "g");
      substitutionVerses = substitutionVerses.replace(replaceFunc, replacer);
    }
    console.log(substitutionVerses);
    setVersesReword(substitutionVerses);
  }

  return (
    <>
          <div className="wrapper">
        <table id="originalsTab1" contentEditable={true} suppressContentEditableWarning={true}>

          <tbody>
            <tr>
              <td >judge</td>
              <td >raider</td>
            </tr>
          </tbody>
        </table>

        <table id="replaceTab1" contentEditable={true} suppressContentEditableWarning={true}>
          <tbody>
            <tr >
              <td >tribal chieftain</td>
              <td >marauder</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={processReword}>Apply Rewording</button>
      <div>{versesReword}</div>
    </>
  );
});

export default SwapTextArea;


