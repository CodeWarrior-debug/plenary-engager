import "./styles.css";
import React, { useState } from "react";

const SwapTextArea = React.memo((props) => {
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
    console.log("complete");
  };

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
    await setVersesReword(subVerses);
  };

  const processReword = () => {
    storeItems();
    swapItems();
  };

  // useEffect(()=> console.log(versesReword));

  React.useEffect(() => {
    console.log(versesReword);
  }, [versesReword]);

  const feedItems = () => {
    let storeArr = [];
    const mytab1 = document.getElementById("originalsTab1");

    for (let row of mytab1.rows) {
      for (let cell of row.cells) {
        let val = cell.innerText; // your code below
        storeArr.push(val);
      }
    }
    return storeArr;
  };

  const feedItems2 = () => {
    let storeArr = [];

    const mytabl2 = document.getElementById("replaceTab1");
    for (let row2 of mytabl2.rows) {
      for (let cell2 of row2.cells) {
        let val = cell2.innerText; // your code below
        storeArr.push(val);
      }
    }
    return storeArr;
  };

  // useEffect(()=>console.log(originals));
  // useEffect(()=>console.log(replacers));

  return (
    <>
      <div className="wrapper">
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

      <button onClick={processReword}>Apply Rewording</button>
      <div>{versesReword}</div>
    </>
  );
});

export default SwapTextArea;