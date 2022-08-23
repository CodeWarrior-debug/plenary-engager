import React from "react";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <h1>Interpretext Generator</h1>
      <div>
        Pick a passage, then choose words in the passage to replace & their
        replacements. Convey the sense of Scripture that may come across better
        in another language, or in another translation!
      </div>

      <table style={{margin: "50px auto"}}>
        <th>Scripture Passage</th>
        <tr>
          <td style={{border: "1px solid"}} id="original">
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
      </table>

      <table id='swap-tbl' style={{margin: "50px auto; border: 1px solid"}}>
                <tr>
                <th>Original</th>
                <th>Replacement</th>
                </tr>
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
            
            <table style={{margin: "50px auto;"}}>
                <th>Passage Re-worded</th>
                <tr> 
            <td style={{border: "1px solid"}} id="replacer">
                Then the Lord raised up judges,[c] who saved them out of the hands of these raiders. 17 Yet they would not listen to their judges but prostituted themselves to other gods and worshiped them. They quickly turned from the ways of their ancestors, who had been obedient to the Lord’s commands. 18 Whenever the Lord raised up a judge for them, he was with the judge and saved them out of the hands of their enemies as long as the judge lived; for the Lord relented because of their groaning under those who oppressed and afflicted them.
            </td>
          </tr>
        </table>
    </>
  );
}
