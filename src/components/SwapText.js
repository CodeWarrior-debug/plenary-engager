import React, { useState } from "react";
import "./index.css";
import { useAtom } from "jotai";
import { themeAtom } from "../App";


const SwapText = React.memo((props) => {
  // KEY VARIABLES
  const [versesReword, setVersesReword] = useState("");
  const mytab1 = document.getElementById("originalsTab1");
  const mytabl2 = document.getElementById("replaceTab1");
  let substitutionVerses = props.verses;

  // TEST AREA
  const [theme, setTheme] = useAtom(themeAtom);

  const changeTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  //*****END TEST AREA

  const addCells = async () => {
    await mytab1.rows[0].insertCell(-1);
    await mytabl2.rows[0].insertCell(-1);
  };

  const storeItems = async () => {
    //collects the lists of original and replacement words
    let originals = await feedItems();
    let replacers = await feedItems2();
    swapItems(originals, replacers);
  };

  const swapItems = async (originals, replacers) => {
    //if proper conditions met, runs key function "replaceText"
    if (!substitutionVerses || !originals.length > 0 || !replacers.length > 0) {
      setVersesReword("");
      return "";
    }
    let replacedText = await replaceText(originals, replacers);
    setReword(replacedText);
  };

  const replaceText = (originals, replacers) => {
    //key function of this program
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

  const processReword = async () => {
    //runs both the preparation and the key functions of this program
    await storeItems();
    await swapItems();
  };

  const feedItems = async () => {
    //collects the words in the first table and stores them into originals array
    let storeArr = [];

    for (let row of mytab1.rows) {
      for (let cell of row.cells) {
        let val = cell.innerText;
        storeArr.push(val);
      }
    }
    return storeArr;
  };

  const feedItems2 = async () => {
    //collects the words in the second table and stores them into replacers array
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
    
      <div className="grid grid-cols-4 mb-4">
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <h3 className="text-center font-extrabold">Originals</h3>
          {/* original words */}
          <table
            className="w-3/5 m-auto mt-4 p-2 originals"
            id="originalsTab1"
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            <tbody>
              <tr className="border-gray-400 border-2 h-8">
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1">
          <h3 className="text-center font-extrabold text-gray-500">
            Replacements
          </h3>
          {/* replacement words */}
          <table
            className="border-black border-1 w-3/5 m-auto mt-4 p-2 replacements"
            id="replaceTab1"
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-span-1">
          <p>
            {/* {testAtom} */}
          </p>
        </div>
      </div>

      <div className="grid place-items-center">
        <div className="flex flex-row justify-center space-x-4">
          <button
            className="bg-gray-300 p-2 rounded hover:scale-90"
            onClick={processReword}
          >
            Apply Rewording
          </button>
          <button
            className="bg-gray-300 p-2 rounded hover:scale-90"
            onClick={clearReword}
          >
            Clear 👇 Reword
          </button>
          <button
            className="bg-gray-300 p-2 rounded hover:scale-90"
            onClick={addCells}
          >
            Add Cells
          </button>
        </div>
      </div>
      <h3 className="text-center mt-4 font-bold text-red-400">
        Passage Re-worded
      </h3>
      <p
        className="border-black border-2 w-3/5 m-auto mt-4 p-2"
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {versesReword}
      </p>
      <p>Our theme is {theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </>
  );
});

export default SwapText;
