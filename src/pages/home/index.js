import { React, useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Select from "react-select";
import DivTest from "../components/div_test";

export default function Home() {
  // Best Reference = https://scripture.api.bible/livedocs
  // API Key to use = 016b11d5817b02cc37b96070428b0525

  const bibleID = "bba9f40183526463-01";
  const booksArray = require("../../assets/books_w_chapters.json");
  const [originals, setOriginals] = useState([]);
  const [replacers, setReplacers] = useState([]);
  //Common Resources
  const allChaptersArr = [
    { label: 1 },
    { label: 2 },
    { label: 3 },
    { label: 4 },
    { label: 5 },
    { label: 6 },
    { label: 7 },
    { label: 8 },
    { label: 9 },
    { label: 10 },
    { label: 11 },
    { label: 12 },
    { label: 13 },
    { label: 14 },
    { label: 15 },
    { label: 16 },
    { label: 17 },
    { label: 18 },
    { label: 19 },
    { label: 20 },
    { label: 21 },
    { label: 22 },
    { label: 23 },
    { label: 24 },
    { label: 25 },
    { label: 26 },
    { label: 27 },
    { label: 28 },
    { label: 29 },
    { label: 30 },
    { label: 31 },
    { label: 32 },
    { label: 33 },
    { label: 34 },
    { label: 35 },
    { label: 36 },
    { label: 37 },
    { label: 38 },
    { label: 39 },
    { label: 40 },
    { label: 41 },
    { label: 42 },
    { label: 43 },
    { label: 44 },
    { label: 45 },
    { label: 46 },
    { label: 47 },
    { label: 48 },
    { label: 49 },
    { label: 50 },
    { label: 51 },
    { label: 52 },
    { label: 53 },
    { label: 54 },
    { label: 55 },
    { label: 56 },
    { label: 57 },
    { label: 58 },
    { label: 59 },
    { label: 60 },
    { label: 61 },
    { label: 62 },
    { label: 63 },
    { label: 64 },
    { label: 65 },
    { label: 66 },
    { label: 67 },
    { label: 68 },
    { label: 69 },
    { label: 70 },
    { label: 71 },
    { label: 72 },
    { label: 73 },
    { label: 74 },
    { label: 75 },
    { label: 76 },
    { label: 77 },
    { label: 78 },
    { label: 79 },
    { label: 80 },
    { label: 81 },
    { label: 82 },
    { label: 83 },
    { label: 84 },
    { label: 85 },
    { label: 86 },
    { label: 87 },
    { label: 88 },
    { label: 89 },
    { label: 90 },
    { label: 91 },
    { label: 92 },
    { label: 93 },
    { label: 94 },
    { label: 95 },
    { label: 96 },
    { label: 97 },
    { label: 98 },
    { label: 99 },
    { label: 100 },
    { label: 101 },
    { label: 102 },
    { label: 103 },
    { label: 104 },
    { label: 105 },
    { label: 106 },
    { label: 107 },
    { label: 108 },
    { label: 109 },
    { label: 110 },
    { label: 111 },
    { label: 112 },
    { label: 113 },
    { label: 114 },
    { label: 115 },
    { label: 116 },
    { label: 117 },
    { label: 118 },
    { label: 119 },
    { label: 120 },
    { label: 121 },
    { label: 122 },
    { label: 123 },
    { label: 124 },
    { label: 125 },
    { label: 126 },
    { label: 127 },
    { label: 128 },
    { label: 129 },
    { label: 130 },
    { label: 131 },
    { label: 132 },
    { label: 133 },
    { label: 134 },
    { label: 135 },
    { label: 136 },
    { label: 137 },
    { label: 138 },
    { label: 139 },
    { label: 140 },
    { label: 141 },
    { label: 142 },
    { label: 143 },
    { label: 144 },
    { label: 145 },
    { label: 146 },
    { label: 147 },
    { label: 148 },
    { label: 149 },
    { label: 150 },
  ];
  const allVersesArr = [
    { label: 1 },
    { label: 2 },
    { label: 3 },
    { label: 4 },
    { label: 5 },
    { label: 6 },
    { label: 7 },
    { label: 8 },
    { label: 9 },
    { label: 10 },
    { label: 11 },
    { label: 12 },
    { label: 13 },
    { label: 14 },
    { label: 15 },
    { label: 16 },
    { label: 17 },
    { label: 18 },
    { label: 19 },
    { label: 20 },
    { label: 21 },
    { label: 22 },
    { label: 23 },
    { label: 24 },
    { label: 25 },
    { label: 26 },
    { label: 27 },
    { label: 28 },
    { label: 29 },
    { label: 30 },
    { label: 31 },
    { label: 32 },
    { label: 33 },
    { label: 34 },
    { label: 35 },
    { label: 36 },
    { label: 37 },
    { label: 38 },
    { label: 39 },
    { label: 40 },
    { label: 41 },
    { label: 42 },
    { label: 43 },
    { label: 44 },
    { label: 45 },
    { label: 46 },
    { label: 47 },
    { label: 48 },
    { label: 49 },
    { label: 50 },
    { label: 51 },
    { label: 52 },
    { label: 53 },
    { label: 54 },
    { label: 55 },
    { label: 56 },
    { label: 57 },
    { label: 58 },
    { label: 59 },
    { label: 60 },
    { label: 61 },
    { label: 62 },
    { label: 63 },
    { label: 64 },
    { label: 65 },
    { label: 66 },
    { label: 67 },
    { label: 68 },
    { label: 69 },
    { label: 70 },
    { label: 71 },
    { label: 72 },
    { label: 73 },
    { label: 74 },
    { label: 75 },
    { label: 76 },
    { label: 77 },
    { label: 78 },
    { label: 79 },
    { label: 80 },
    { label: 81 },
    { label: 82 },
    { label: 83 },
    { label: 84 },
    { label: 85 },
    { label: 86 },
    { label: 87 },
    { label: 88 },
    { label: 89 },
    { label: 90 },
    { label: 91 },
    { label: 92 },
    { label: 93 },
    { label: 94 },
    { label: 95 },
    { label: 96 },
    { label: 97 },
    { label: 98 },
    { label: 99 },
    { label: 100 },
    { label: 101 },
    { label: 102 },
    { label: 103 },
    { label: 104 },
    { label: 105 },
    { label: 106 },
    { label: 107 },
    { label: 108 },
    { label: 109 },
    { label: 110 },
    { label: 111 },
    { label: 112 },
    { label: 113 },
    { label: 114 },
    { label: 115 },
    { label: 116 },
    { label: 117 },
    { label: 118 },
    { label: 119 },
    { label: 120 },
    { label: 121 },
    { label: 122 },
    { label: 123 },
    { label: 124 },
    { label: 125 },
    { label: 126 },
    { label: 127 },
    { label: 128 },
    { label: 129 },
    { label: 130 },
    { label: 131 },
    { label: 132 },
    { label: 133 },
    { label: 134 },
    { label: 135 },
    { label: 136 },
    { label: 137 },
    { label: 138 },
    { label: 139 },
    { label: 140 },
    { label: 141 },
    { label: 142 },
    { label: 143 },
    { label: 144 },
    { label: 145 },
    { label: 146 },
    { label: 147 },
    { label: 148 },
    { label: 149 },
    { label: 150 },
    { label: 151 },
    { label: 152 },
    { label: 153 },
    { label: 154 },
    { label: 155 },
    { label: 156 },
    { label: 157 },
    { label: 158 },
    { label: 159 },
    { label: 160 },
    { label: 161 },
    { label: 162 },
    { label: 163 },
    { label: 164 },
    { label: 165 },
    { label: 166 },
    { label: 167 },
    { label: 168 },
    { label: 169 },
    { label: 170 },
    { label: 171 },
    { label: 172 },
    { label: 173 },
    { label: 174 },
    { label: 175 },
    { label: 176 },
  ];
  const verseCount = require("../../assets/book_chapters_w_versecounts.json");
  const chosen_translation = "bbe";

  //Verse Methods
  const [startVerse, setStartVerse] = useState("");
  const [endVerse, setEndVerse] = useState("");
  const [verses, setVerses] = useState("");
  const [verseArr, setVerseArr] = useState([]);

  //Chapter Methods
  const [chapters, setChapters] = useState("");
  const [chaptersArr, setChaptersArr] = useState([]);
  const [chapterStart, setChapterStart] = useState("");

  //Book Methods
  const [book, setBook] = useState("");
  const [bookLabel, setBookLabel] = useState("");

  const getVerses = (
    bookLabel,
    chapterStart,
    startVerse,
    chosen_translation
  ) => {
    // endChap, endVerse
    axios
      .get(
        `https://bible-api.com/${bookLabel}+${chapterStart}:${startVerse}-${endVerse}?translation=${chosen_translation}`
      )
      .then((res) => {
        setVerses(res.data.text);
      });
  };


  const limitArr = (e, arr) => {
    return arr.filter((i) => i.label <= e);
  };

  const updateChapters = (e) => {
    //sets book value and chapter array
    setBookLabel(e.label);
    setChaptersArr(limitArr(e.chapter_count, allChaptersArr));
  };

  const updateVerses = (e) => {
    //sets chapter start value and verses array
    setChapterStart(e.label);
    let maxVerse = verseCount[bookLabel + "-" + e.label];
    setVerseArr(limitArr(maxVerse, allVersesArr));
  };

  const pickStartVerse = (e) => {
    //sets start verse
    setStartVerse(e.label);
  };

  const pickEndVerse = (e) => {
    //sets start verse
    setEndVerse(e.label);
  };

  const BookSelect = () => (
    <Select
      value={{ bookLabel }}
      options={booksArray}
      onChange={(e) => {
        updateChapters(e);
      }}
    />
  );

  const ChapterSelect = () => (
    <Select
      options={chaptersArr}
      onChange={(e) => {
        updateVerses(e);
      }}
    />
  );

  const VerseSelect = () => (
    <Select
      options={verseArr}
      onChange={(e) => {
        pickStartVerse(e);
      }}
    />
  );

  const VerseSelectEnd = () => (
    <Select
      options={verseArr}
      onChange={(e) => {
        pickEndVerse(e);
      }}
    />
  );

  useEffect(() => {
    axios
      .get("https://bible-api.com/judges+2:16-2:18?translation=kjv")
      .then((res) => {
        setVerses(res.data.text);
      });
  }, []);

  // const getVerses =(book, startChap, startVerse,translation) => {  // endChap, endVerse
  //     axios
  //       .get(`https://bible-api.com/${book}+${startChap}:${startVerse}?translation=${translation}}`)
  //       .then((res) => {
  //         setVerses(res.data.text)
  //       })
  //   }

  // const getChapters =()=> {
  //   axios

  //   .get(`https://api.scripture.api.bible/v1/bibles/${bibleID}/books/gen/chapters`,
  //     {headers: {'api-key':'016b11d5817b02cc37b96070428b0525'}}
  //         )
  //   .then((res)=> {
  //     console.log(res.data)
  //     setChapters(res.data)
  //     console.log(chapters)
  //   })
  // }

  return (
    <>
      <h1>Choose A Range of Verses</h1>
      <div>
        Pick a passage, then choose words in the passage to replace &/amp their
        replacements. Convey the sense of Scripture that may come across better
        in another language, or in another translation!
      </div>
      <BookSelect />
      <ChapterSelect chapters={chapters} />
      <VerseSelect startVerse={startVerse} />
      <VerseSelectEnd endVerse={endVerse} />
      <DivTest id="bookText" number={bookLabel} />
      <DivTest id="chapStartNum" number={chapterStart} />
      <DivTest id="verseStartNum" number={startVerse} />
      <DivTest id="verseStartNum" number={endVerse} />
      <h1>Interpretext Generator</h1>

      <th>Scripture Passage</th>
      <table style={{ margin: "50px auto" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid" }} id="original">
              {verses}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={getVerses(
          bookLabel,
          chapterStart,
          startVerse,
          chosen_translation
        )}
        // onClick={getChapters}
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

  // {/* var table = document.getElementById("swap-tbl");
  // iterate trough rows */}

  // function swapItems(){

  //    for (var i = 0, row; row = table.rows[i]; i++) {
  //       //go through first column
  //       for (var j = 0, col; col = 0; j++) {

  //          originals.push(row.cell[j].textContent)

  //       }
  //    }
  //    console.log(originals)
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
  // console.log(substitutionVerses);

  // useEffect(() => {
  //   axios
  //     .get("https://bible-api.com/judges+2:16-2:18?translation=kjv")
  //     .then((res) => {
  //       setVerses(res.data.text)
  //     });
  // },[])

  // const getVerses =(book, startChap, startVerse,translation) => {  // endChap, endVerse
  //     axios
  //       .get(`https://bible-api.com/${book}+${startChap}:${startVerse}?translation=${translation}}`)
  //       .then((res) => {
  //         setVerses(res.data.text)
  //       })
  //   }

  // const getChapters =()=> {
  //   axios

  //   .get(`https://api.scripture.api.bible/v1/bibles/${bibleID}/books/gen/chapters`,
  //     {headers: {'api-key':'016b11d5817b02cc37b96070428b0525'}}
  //         )
  //   .then((res)=> {
  //     console.log(res.data)
  //     setChapters(res.data)
  //     console.log(chapters)
  //   })
  // }

  //   var table = document.getElementById("swap-tbl");
  //iterate trough rows

  //   function swapItems(){

  //      for (var i = 0, row; row = table.rows[i]; i++) {
  //         //go through first column
  //         for (var j = 0, col; col = 0; j++) {

  //            originals.push(row.cell[j].textContent)

  //         }
  //      }
  //      console.log(originals)
  //   }

  //   if (table){

  //      var substitutionVerses = testVerses;

  //   for (i=0;i<originalsArr.length;i++) {
  //      var replaced = originalsArr[i];
  //      var replacer = replacesArr[i];
  //      var replaceFunc = new RegExp(replaced,"g");
  //      substitutionVerses=substitutionVerses.replace(replaceFunc, replacer)
  //   }
  //   }
  //   console.log(substitutionVerses);
}
