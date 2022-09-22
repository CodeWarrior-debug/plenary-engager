import "./styles.css";
import React, { useState } from "react";

const SwapTextArea = React.memo(props => {

  const [versesReword, setVersesReword] = useState("");
  

  function swapItems() {
    if (!props.verses || !props.originals || !props.replacers) {
      setVersesReword("");
      return "";
    }

    var substitutionVerses = props.verses;

    for (let i = 0; i < props.originals.length; i++) {
      var replaced = props.originals[i];
      var replacer = props.replacers[i];
      var replaceFunc = new RegExp(replaced, "g");
      substitutionVerses = substitutionVerses.replace(replaceFunc, replacer);
    }
    console.log(substitutionVerses);
    setVersesReword(substitutionVerses);
  }

  return (
    <>
      <h1>Choose A Range of Verses</h1>
      <button onClick={swapItems}>Swap Items</button>
      {/* <textarea> {versesReword}</textarea> */}
      <div>{versesReword}</div>
    </>
  );
});

export default SwapTextArea;


