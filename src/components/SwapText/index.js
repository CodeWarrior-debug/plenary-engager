
import React, { useState } from "react";

const SwapText = React.memo((props) => {
  const [versesReword, setVersesReword] = useState("");

  let substitutionVerses = props.verses;

  const storeItems = async () => {
    let originals = await feedItems();
    let replacers = await feedItems2();
    swapItems(originals, replacers);
  };

  const swapItems = async (originals, replacers) => {
    if (!substitutionVerses || !originals[0] || !replacers[0]) {
      setVersesReword("");
      return "";
    }
    let replacedText = await replaceText(originals, replacers);
    setReword(replacedText);
    // console.log("complete");
  };

  //key function of this program
  const replaceText = (originals, replacers) => {
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

  const processReword = async() => {
    await storeItems();
    await swapItems();
  };


  const feedItems = async () => {
    let storeArr = [];
    const mytab1 = document.getElementById("originalsTab1");

    for (let row of mytab1.rows) {
      for (let cell of row.cells) {
        let val = cell.innerText; 
        storeArr.push(val);
      }
    }
    return storeArr;
  };

  const feedItems2 = async () => {
    let storeArr = [];

    const mytabl2 = document.getElementById("replaceTab1");
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

  return (
    <>
      <div>
        {/* original words */}
        <table
          id="originalsTab1"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <tbody>
            <tr>
              <td>judge</td>
              <td>raider</td>
            </tr>
          </tbody>
        </table>
      {/* replacement words */}
        <table
          id="replaceTab1"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <tbody>
            <tr>
              <td>tribal chieftain</td>
              <td>marauder</td>
            </tr>
          </tbody>
        </table>
      </div>

    <div className="grid place-items-center">
    <div className="flex flex-row justify-center space-x-4">

      <button className="bg-gray-300 p-2 rounded hover:scale-90" onClick={processReword}>Apply Rewording</button>
      <button className="bg-gray-300 p-2 rounded hover:scale-90" onClick={clearReword}>Clear 👇 Reword</button>
    </div>
    </div>
      <div className="border-black border-2 w-3/5 m-auto mt-4 p-2">{versesReword}</div>
    </>
  );
});

export default SwapText;
