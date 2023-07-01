import { React, useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Select from "react-select";
import SwapTextArea from "../../components/SwapText";

export default function Home() {
  const booksArray = require("../../assets/books_w_chapters.json");
  const [selectedOption, setSelectedOption] = useState("none");
  const [selectedOption2, setSelectedOption2] = useState("none");
  const [selectedOption3, setSelectedOption3] = useState("none");
  const [selectedOption4, setSelectedOption4] = useState("none");

  //Common Resources
  const allChapsVersesArr = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 },
    { value: 21, label: 21 },
    { value: 22, label: 22 },
    { value: 23, label: 23 },
    { value: 24, label: 24 },
    { value: 25, label: 25 },
    { value: 26, label: 26 },
    { value: 27, label: 27 },
    { value: 28, label: 28 },
    { value: 29, label: 29 },
    { value: 30, label: 30 },
    { value: 31, label: 31 },
    { value: 32, label: 32 },
    { value: 33, label: 33 },
    { value: 34, label: 34 },
    { value: 35, label: 35 },
    { value: 36, label: 36 },
    { value: 37, label: 37 },
    { value: 38, label: 38 },
    { value: 39, label: 39 },
    { value: 40, label: 40 },
    { value: 41, label: 41 },
    { value: 42, label: 42 },
    { value: 43, label: 43 },
    { value: 44, label: 44 },
    { value: 45, label: 45 },
    { value: 46, label: 46 },
    { value: 47, label: 47 },
    { value: 48, label: 48 },
    { value: 49, label: 49 },
    { value: 50, label: 50 },
    { value: 51, label: 51 },
    { value: 52, label: 52 },
    { value: 53, label: 53 },
    { value: 54, label: 54 },
    { value: 55, label: 55 },
    { value: 56, label: 56 },
    { value: 57, label: 57 },
    { value: 58, label: 58 },
    { value: 59, label: 59 },
    { value: 60, label: 60 },
    { value: 61, label: 61 },
    { value: 62, label: 62 },
    { value: 63, label: 63 },
    { value: 64, label: 64 },
    { value: 65, label: 65 },
    { value: 66, label: 66 },
    { value: 67, label: 67 },
    { value: 68, label: 68 },
    { value: 69, label: 69 },
    { value: 70, label: 70 },
    { value: 71, label: 71 },
    { value: 72, label: 72 },
    { value: 73, label: 73 },
    { value: 74, label: 74 },
    { value: 75, label: 75 },
    { value: 76, label: 76 },
    { value: 77, label: 77 },
    { value: 78, label: 78 },
    { value: 79, label: 79 },
    { value: 80, label: 80 },
    { value: 81, label: 81 },
    { value: 82, label: 82 },
    { value: 83, label: 83 },
    { value: 84, label: 84 },
    { value: 85, label: 85 },
    { value: 86, label: 86 },
    { value: 87, label: 87 },
    { value: 88, label: 88 },
    { value: 89, label: 89 },
    { value: 90, label: 90 },
    { value: 91, label: 91 },
    { value: 92, label: 92 },
    { value: 93, label: 93 },
    { value: 94, label: 94 },
    { value: 95, label: 95 },
    { value: 96, label: 96 },
    { value: 97, label: 97 },
    { value: 98, label: 98 },
    { value: 99, label: 99 },
    { value: 100, label: 100 },
    { value: 101, label: 101 },
    { value: 102, label: 102 },
    { value: 103, label: 103 },
    { value: 104, label: 104 },
    { value: 105, label: 105 },
    { value: 106, label: 106 },
    { value: 107, label: 107 },
    { value: 108, label: 108 },
    { value: 109, label: 109 },
    { value: 110, label: 110 },
    { value: 111, label: 111 },
    { value: 112, label: 112 },
    { value: 113, label: 113 },
    { value: 114, label: 114 },
    { value: 115, label: 115 },
    { value: 116, label: 116 },
    { value: 117, label: 117 },
    { value: 118, label: 118 },
    { value: 119, label: 119 },
    { value: 120, label: 120 },
    { value: 121, label: 121 },
    { value: 122, label: 122 },
    { value: 123, label: 123 },
    { value: 124, label: 124 },
    { value: 125, label: 125 },
    { value: 126, label: 126 },
    { value: 127, label: 127 },
    { value: 128, label: 128 },
    { value: 129, label: 129 },
    { value: 130, label: 130 },
    { value: 131, label: 131 },
    { value: 132, label: 132 },
    { value: 133, label: 133 },
    { value: 134, label: 134 },
    { value: 135, label: 135 },
    { value: 136, label: 136 },
    { value: 137, label: 137 },
    { value: 138, label: 138 },
    { value: 139, label: 139 },
    { value: 140, label: 140 },
    { value: 141, label: 141 },
    { value: 142, label: 142 },
    { value: 143, label: 143 },
    { value: 144, label: 144 },
    { value: 145, label: 145 },
    { value: 146, label: 146 },
    { value: 147, label: 147 },
    { value: 148, label: 148 },
    { value: 149, label: 149 },
    { value: 150, label: 150 },
    { value: 151, label: 151 },
    { value: 152, label: 152 },
    { value: 153, label: 153 },
    { value: 154, label: 154 },
    { value: 155, label: 155 },
    { value: 156, label: 156 },
    { value: 157, label: 157 },
    { value: 158, label: 158 },
    { value: 159, label: 159 },
    { value: 160, label: 160 },
    { value: 161, label: 161 },
    { value: 162, label: 162 },
    { value: 163, label: 163 },
    { value: 164, label: 164 },
    { value: 165, label: 165 },
    { value: 166, label: 166 },
    { value: 167, label: 167 },
    { value: 168, label: 168 },
    { value: 169, label: 169 },
    { value: 170, label: 170 },
    { value: 171, label: 171 },
    { value: 172, label: 172 },
    { value: 173, label: 173 },
    { value: 174, label: 174 },
    { value: 175, label: 175 },
    { value: 176, label: 176 },
  ];

  const verseCount = require("../../assets/book_chapters_w_versecounts.json");
  const chosen_translation = "bbe";

  //Verse Methods
  const [startVerse, setStartVerse] = useState("");
  const [endVerse, setEndVerse] = useState("");
  const [verses, setVerses] = useState("");
  const [verseArr, setVerseArr] = useState([]);

  //Chapter Methods
  const [chaptersArr, setChaptersArr] = useState([]);
  const [chapterStart, setChapterStart] = useState("");

  //Book Methods

  const [bookLabel, setBookLabel] = useState("");

  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };

  const handleTypeSelect2 = (e) => {
    setSelectedOption2(e.value);
  };

  const handleTypeSelect3 = (e) => {
    setSelectedOption3(e.value);
  };

  const handleTypeSelect4 = (e) => {
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
    if (bookLabel && chapterStart && startVerse) {
      axios
        .get(
          `https://bible-api.com/${bookLabel}+${chapterStart}:${startVerse}-${endVerse}?translation=${chosen_translation}`
        )
        .then((res) => {
          setVerses(res.data.text);
        });
    }
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
      value={booksArray.filter(function (option) {
        return option.value === selectedOption;
      })}
      onChange={(e) => {
        handleTypeSelect(e);
        updateChapters(e);
      }}
    />
  );

  const ChapterSelect = () => (
    <Select
      options={chaptersArr}
      value={chaptersArr.filter(function (option) {
        return option.value === selectedOption2;
      })}
      onChange={(e) => {
        handleTypeSelect2(e);
        updateVerses(e);
      }}
    />
  );

  const VerseSelect = () => (
    <Select
      options={verseArr}
      value={verseArr.filter(function (option) {
        return option.value === selectedOption3;
      })}
      onChange={(e) => {
        handleTypeSelect3(e);
        pickStartVerse(e);
      }}
    />
  );

  const VerseSelectEnd = () => (
    <Select
      options={verseArr}
      value={verseArr.filter(function (option) {
        return option.value === selectedOption4;
      })}
      onChange={(e) => {
        handleTypeSelect4(e);
        pickEndVerse(e);
      }}
    />
  );

  useEffect(() => {
    axios
      .get("https://bible-api.com/genesis+1:1-1:2?translation=kjv")
      .then((res) => {
        setVerses(res.data.text);
      });
  }, []);

  return (
    <>
      <h1 className="text-center font-extrabold text-4xl mt-12">
        Choose A Range of Verses
      </h1>
      <div className="mt-2 ml-[15%] mr-[15%] text-center text-xl">
        Pick a passage, then choose words in the passage to reword & their
        substitutes. Convey the sense of Scripture that may come across better
        in the original language, another translation and/or manner.
      </div>
      <div className=" ml-48 mt-8 w-full grid grid-cols-10 place-items-start mb-8 mr-48">
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <h6 className="text-center font-extrabold">Book</h6>
          <BookSelect value={bookLabel} />
        </div>

        <div className="col-span-1">
          <h6 className="text-center font-extrabold">Chapter</h6>
          <ChapterSelect chapters={chapterStart} />
        </div>
        <div className="col-span-1">
          <h6 className="text-center font-extrabold">1st Verse</h6>
          <VerseSelect startVerse={startVerse} />
        </div>
        <div className="col-span-1">
          <h6 className="text-center font-extrabold">End Verse</h6>
          <VerseSelectEnd endVerse={endVerse} />
        </div>

        <div className="col-span-2"></div>
      </div>
      <h2 className="text-center font-extrabold text-4xl mt-12 text-gray-500">
        Interpretext Generator
      </h2>
      <h3 className="text-center mt-4 font-bold text-green-700">
        Scripture Passage
      </h3>
      <div className="grid grid-cols-5 place-items-center ">
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <table>
            <tbody>
              <tr>
                <td
                  className="mt-4 border-solid border-black border-2 p-2"
                  id="original"
                >
                  {verses}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1"></div>
      </div>
      <button
        onClick={getVerses(
          bookLabel,
          chapterStart,
          startVerse,
          endVerse,
          chosen_translation
        )}
        id="import-btn"
        style={{
          textAlign: "center",
          backgroundColor: "white",
          color: "white",
          border: "1px solid white",
        }}
      >
        Easy Button
      </button>

      <SwapTextArea verses={verses} />

      <th>Passage Re-worded</th>

      <table style={{ margin: "50px auto" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid" }} id="replacer"></td>
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

// Best Reference = https://scripture.api.bible/livedocs
// API Key to use = 016b11d5817b02cc37b96070428b0525
// const bibleID = "bba9f40183526463-01";

// const getChaptersFromAPI-Bible =()=> {
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
