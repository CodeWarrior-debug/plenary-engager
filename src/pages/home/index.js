import { React, useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Select from "react-select";
import DivTest from "../../components/div_test";
import SwapTextArea from "../../components/swapTextArea";

export default function Home() {
  // Best Reference = https://scripture.api.bible/livedocs
  // API Key to use = 016b11d5817b02cc37b96070428b0525
  // const bibleID = "bba9f40183526463-01";

  const booksArray = require("../../assets/books_w_chapters.json");
  const [selectedOption, setSelectedOption] = useState("none");
  const [selectedOption2, setSelectedOption2] = useState("none");
  const [selectedOption3, setSelectedOption3] = useState("none");
  const [selectedOption4, setSelectedOption4] = useState("none");
  const [originals, setOriginals] = useState([]);
  const [replacers, setReplacers] = useState([]);
  //Common Resources
  const allChapsVersesArr = [
    {value: 1, label: 1 },
{value: 2, label: 2 },
{value: 3, label: 3 },
{value: 4, label: 4 },
{value: 5, label: 5 },
{value: 6, label: 6 },
{value: 7, label: 7 },
{value: 8, label: 8 },
{value: 9, label: 9 },
{value: 10, label: 10 },
{value: 11, label: 11 },
{value: 12, label: 12 },
{value: 13, label: 13 },
{value: 14, label: 14 },
{value: 15, label: 15 },
{value: 16, label: 16 },
{value: 17, label: 17 },
{value: 18, label: 18 },
{value: 19, label: 19 },
{value: 20, label: 20 },
{value: 21, label: 21 },
{value: 22, label: 22 },
{value: 23, label: 23 },
{value: 24, label: 24 },
{value: 25, label: 25 },
{value: 26, label: 26 },
{value: 27, label: 27 },
{value: 28, label: 28 },
{value: 29, label: 29 },
{value: 30, label: 30 },
{value: 31, label: 31 },
{value: 32, label: 32 },
{value: 33, label: 33 },
{value: 34, label: 34 },
{value: 35, label: 35 },
{value: 36, label: 36 },
{value: 37, label: 37 },
{value: 38, label: 38 },
{value: 39, label: 39 },
{value: 40, label: 40 },
{value: 41, label: 41 },
{value: 42, label: 42 },
{value: 43, label: 43 },
{value: 44, label: 44 },
{value: 45, label: 45 },
{value: 46, label: 46 },
{value: 47, label: 47 },
{value: 48, label: 48 },
{value: 49, label: 49 },
{value: 50, label: 50 },
{value: 51, label: 51 },
{value: 52, label: 52 },
{value: 53, label: 53 },
{value: 54, label: 54 },
{value: 55, label: 55 },
{value: 56, label: 56 },
{value: 57, label: 57 },
{value: 58, label: 58 },
{value: 59, label: 59 },
{value: 60, label: 60 },
{value: 61, label: 61 },
{value: 62, label: 62 },
{value: 63, label: 63 },
{value: 64, label: 64 },
{value: 65, label: 65 },
{value: 66, label: 66 },
{value: 67, label: 67 },
{value: 68, label: 68 },
{value: 69, label: 69 },
{value: 70, label: 70 },
{value: 71, label: 71 },
{value: 72, label: 72 },
{value: 73, label: 73 },
{value: 74, label: 74 },
{value: 75, label: 75 },
{value: 76, label: 76 },
{value: 77, label: 77 },
{value: 78, label: 78 },
{value: 79, label: 79 },
{value: 80, label: 80 },
{value: 81, label: 81 },
{value: 82, label: 82 },
{value: 83, label: 83 },
{value: 84, label: 84 },
{value: 85, label: 85 },
{value: 86, label: 86 },
{value: 87, label: 87 },
{value: 88, label: 88 },
{value: 89, label: 89 },
{value: 90, label: 90 },
{value: 91, label: 91 },
{value: 92, label: 92 },
{value: 93, label: 93 },
{value: 94, label: 94 },
{value: 95, label: 95 },
{value: 96, label: 96 },
{value: 97, label: 97 },
{value: 98, label: 98 },
{value: 99, label: 99 },
{value: 100, label: 100 },
{value: 101, label: 101 },
{value: 102, label: 102 },
{value: 103, label: 103 },
{value: 104, label: 104 },
{value: 105, label: 105 },
{value: 106, label: 106 },
{value: 107, label: 107 },
{value: 108, label: 108 },
{value: 109, label: 109 },
{value: 110, label: 110 },
{value: 111, label: 111 },
{value: 112, label: 112 },
{value: 113, label: 113 },
{value: 114, label: 114 },
{value: 115, label: 115 },
{value: 116, label: 116 },
{value: 117, label: 117 },
{value: 118, label: 118 },
{value: 119, label: 119 },
{value: 120, label: 120 },
{value: 121, label: 121 },
{value: 122, label: 122 },
{value: 123, label: 123 },
{value: 124, label: 124 },
{value: 125, label: 125 },
{value: 126, label: 126 },
{value: 127, label: 127 },
{value: 128, label: 128 },
{value: 129, label: 129 },
{value: 130, label: 130 },
{value: 131, label: 131 },
{value: 132, label: 132 },
{value: 133, label: 133 },
{value: 134, label: 134 },
{value: 135, label: 135 },
{value: 136, label: 136 },
{value: 137, label: 137 },
{value: 138, label: 138 },
{value: 139, label: 139 },
{value: 140, label: 140 },
{value: 141, label: 141 },
{value: 142, label: 142 },
{value: 143, label: 143 },
{value: 144, label: 144 },
{value: 145, label: 145 },
{value: 146, label: 146 },
{value: 147, label: 147 },
{value: 148, label: 148 },
{value: 149, label: 149 },
{value: 150, label: 150 },
{value: 151, label: 151 },
{value: 152, label: 152 },
{value: 153, label: 153 },
{value: 154, label: 154 },
{value: 155, label: 155 },
{value: 156, label: 156 },
{value: 157, label: 157 },
{value: 158, label: 158 },
{value: 159, label: 159 },
{value: 160, label: 160 },
{value: 161, label: 161 },
{value: 162, label: 162 },
{value: 163, label: 163 },
{value: 164, label: 164 },
{value: 165, label: 165 },
{value: 166, label: 166 },
{value: 167, label: 167 },
{value: 168, label: 168 },
{value: 169, label: 169 },
{value: 170, label: 170 },
{value: 171, label: 171 },
{value: 172, label: 172 },
{value: 173, label: 173 },
{value: 174, label: 174 },
{value: 175, label: 175 },
{value: 176, label: 176 }
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
  
  const [bookLabel, setBookLabel] = useState("");


  const handleTypeSelect = e => {
    setSelectedOption(e.value);
  };

  const handleTypeSelect2 = e => {
    setSelectedOption2(e.value);
  };

  const handleTypeSelect3 = e => {
    setSelectedOption3(e.value);
  };

  const handleTypeSelect4 = e => {
    setSelectedOption4(e.value);
  };

  const getVerses = (
    bookLabel,
    chapterStart,
    startVerse,
    endVerse,
    chosen_translation
  ) => {
    // TODO: endChap
    if (bookLabel && chapterStart && startVerse){
    axios
      .get(
        `https://bible-api.com/${bookLabel}+${chapterStart}:${startVerse}-${endVerse}?translation=${chosen_translation}`
      )
      .then((res) => {
        setVerses(res.data.text);
      })};
  };

  const limitArr = (e, arr) => {
    //returns chapters and verses list that is <= the number of chapters/verses in book
    return arr.filter((i) => i.label <= e);
  };

  const updateChapters = (e) => {
    //sets book value and chapter array
    setBookLabel(e.label);
    setChaptersArr(limitArr(e.chapter_count, allChapsVersesArr));
  };

  const updateVerses = (e) => {
    //sets chapter start value and verses array
    setChapterStart(e.label);
    let maxVerse = verseCount[bookLabel + "-" + e.label];
    setVerseArr(limitArr(maxVerse, allChapsVersesArr));
  };

  const pickStartVerse = (e) => {
    //sets start verse
    setStartVerse(e.label);
  };

  const pickEndVerse = (e) => {
    //sets end verse
    setEndVerse(e.label);
  };

  const BookSelect = () => (
    <Select
      options={booksArray}
      value={booksArray.filter(function(option) {
        return option.value === selectedOption;})}
      onChange={(e) => {
        handleTypeSelect(e);
        updateChapters(e);
      }}
    />
  );

  const ChapterSelect = () => (
    <Select
      options={chaptersArr}
      value={chaptersArr.filter(function(option) {
        return option.value === selectedOption2})}
      onChange={(e) => {
        handleTypeSelect2(e);
        updateVerses(e);
      }}
    />
  );

  const VerseSelect = () => (
    <Select
      options={verseArr}
      value={verseArr.filter(function(option) {
        return option.value === selectedOption3;})}
      onChange={(e) => {
        handleTypeSelect3(e);
        pickStartVerse(e);
      }}
    />
  );

  const VerseSelectEnd = () => (
    <Select
      options={verseArr}
      value={verseArr.filter(function(option) {
        return option.value === selectedOption4;})}
      onChange={(e) => {
        handleTypeSelect4(e);
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





  // function swapItems(verses, originals, replacers) {

    // let substitutionVerses = verses;

    // for (let i = 0; i < originals.length; i++) {
    //   let replaced = originals[i];
    //   let replacer = replacers[i];
    //   const replaceFunc = new RegExp(replaced, "g");
    //   substitutionVerses = substitutionVerses.replace(replaceFunc, replacer);
    // }
    // setVersesReword(substitutionVerses);
    // return
  // }

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

  return (
    <>
      <h1>Choose A Range of Verses</h1>
      <div>
        Pick a passage, then choose words in the passage to replace & their
        replacements. Convey the sense of Scripture that may come across better
        in another language, or in another translation!
      </div>
      <BookSelect value={bookLabel} />
      <ChapterSelect chapters={chapters} />
      <VerseSelect startVerse={startVerse} />
      <VerseSelectEnd endVerse={endVerse} />
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
          endVerse,
          chosen_translation
        )}
        id="import-btn"
        style={{ textAlign: "center" }}
      >
        Import Verses
      </button>
      <div className="wrapper">
        <table id="originalsTab1">
          <thead>
            {/* <tr>
      <th>header1</th>
    </tr> */}
          </thead>
          <tbody>
            <tr>
              <td>judge</td>
              <td>raider</td>
            </tr>
          </tbody>
        </table>

        <table id="replaceTab1">
          <thead>
            {/* <tr>
      <th>header1</th>
    </tr> */}
          </thead>
          <tbody>
            <tr>
              <td>tribal chieftain</td>
              <td>marauder</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 
      <th>Original</th>
      <th>Replacement</th>
   */}

      <button
        id="swap-btn"
        style={{ textAlign: "center" }}
        onClick={storeItems}
      >
        Store Items Test
      </button>
      <button
        id="swap-btn"
        style={{ textAlign: "center" }}
        // onClick={swapItems(verses, originals, replacers)}
      >
        Re-word Now!
      </button>

      <SwapTextArea verses={verses} replacers={replacers} originals={originals}/>

      <th>Passage Re-worded</th>
      <table style={{ margin: "50px auto;" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid" }} id="replacer">
              {/* {versesReword} */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
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

// 
  // const getChaptersFromBibleAPI =()=> {
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