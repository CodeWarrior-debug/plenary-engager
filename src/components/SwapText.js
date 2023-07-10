
import React, { useState } from "react";

const SwapText = React.memo((props) => {
  // KEY VARIABLES
  const [versesReword, setVersesReword] = useState("");
  const mytab1 = document.getElementById("originalsTab1");
  const mytabl2 = document.getElementById("replaceTab1");
  let substitutionVerses = props.verses;
  
  // TEST AREA
const addCells = () => {
  let row = mytab1.rows[0];
  let cell = row.insertCell(-1);
  let row2 = mytabl2.rows[0];
  let cell2 = row2.insertCell(-1);
  cell.outerHTML = "<td className='border-gray-400 border-2'></td>";
  cell2.outerHTML = "<td className='border-gray-400 border-2'></td>";
  

};
  //*****END TEST AREA


  const storeItems = async () => {  //collects the lists of original and replacement words
    let originals = await feedItems();
    let replacers = await feedItems2();
    swapItems(originals, replacers);
  };

  const swapItems = async (originals, replacers) => { //if proper conditions met, runs key function "replaceText"
    if (!substitutionVerses || !originals.length>0 || !replacers.length>0) {
      setVersesReword("");
      return "";
    }
    let replacedText = await replaceText(originals, replacers);
    setReword(replacedText);
  };

  
  const replaceText = (originals, replacers) => { //key function of this program
    for (let i = 0; i < originals.length; i++) {
      let replaced = originals[i];
      let replacer = replacers[i];
      const replaceFunc = new RegExp(replaced, "g"); //TODO: check regular expressions that will ignore punctuation
      substitutionVerses = substitutionVerses.replace(replaceFunc, replacer);
    }
    return substitutionVerses;
  };

  const setReword = async (subVerses) => {
    setVersesReword(subVerses);
  };

  const processReword = async() => { //runs both the preparation and the key functions of this program
    await storeItems();
    await swapItems();
  };


  const feedItems = async () => { //collects the words in the first table and stores them into originals array
    let storeArr = [];
    

    for (let row of mytab1.rows) {
      for (let cell of row.cells) {
        let val = cell.innerText; 
        storeArr.push(val);
      }
    }
    return storeArr;
  };

  const feedItems2 = async () => { //collects the words in the second table and stores them into replacers array
    let storeArr = [];

    
    for (let row2 of mytabl2.rows) {
      for (let cell2 of row2.cells) {
        let val = cell2.innerText; 
        storeArr.push(val);
      }
    }
    return storeArr;
  };

  const clearReword = () => {
    setVersesReword("");
  };

  // const handleRewordChange = (evt) => {
  //   setVersesReword(evt.currentTaret.value);
  // };

  return (
    <>
      <div>
        {/* original words */}
        <table className="w-3/5 m-auto mt-4 p-2"
          id="originalsTab1"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <tbody>
            <tr className="border-gray-400 border-2">
              <td className="border-gray-400 border-2">judge</td>
              <td className="border-gray-400 border-2">raider</td>
            </tr>
          </tbody>
        </table>
      {/* replacement words */}
      <table className="border-black border-1 w-3/5 m-auto mt-4 p-2"
          id="replaceTab1"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <tbody>
            <tr>
            <td className="border-gray-200 border-2 border-b-0">tribal chieftain</td>
              <td className="border-gray-200 border-2">marauder</td>
            </tr>
          </tbody>
        </table>
      </div>

    <div className="grid place-items-center">
    <div className="flex flex-row justify-center space-x-4">

      <button className="bg-gray-300 p-2 rounded hover:scale-90" onClick={processReword}>Apply Rewording</button>
      <button className="bg-gray-300 p-2 rounded hover:scale-90" onClick={clearReword}>Clear 👇 Reword</button>
      <button className="bg-gray-300 p-2 rounded hover:scale-90" onClick={addCells}>Add Cells</button>
    </div>
    </div>
      <div className="border-black border-2 w-3/5 m-auto mt-4 p-2">{versesReword}</div>
    </>
  );
});

export default SwapText;
