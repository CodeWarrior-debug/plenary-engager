import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import Select from "react-select";
import SwapText from "../../components/SwapText";
import { allChapsVersesArr } from "../../assets/allChapterVerses";

// TODO: add a "clear" button to clear all the fields
// TODO: add a "save" button to save the current state of the fields
// TODO: prevent fetch if no book, chapter, or start and end verse is selected
// TODO: NextJS refactor
// TODO: postgres hookup

export default function Home() {
  // States and Variables
  const booksArray = require("../../assets/books_w_chapters.json");
  const [selectedOption, setSelectedOption] = useState("none");
  const [selectedOption2, setSelectedOption2] = useState("none");
  const [selectedOption3, setSelectedOption3] = useState("none");
  const [selectedOption4, setSelectedOption4] = useState("none");
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

  //Common Methods
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

  const handleStore = () => {};

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
      {/* SELECTORS */}
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
      {/* SCRIPTURE DISPLAY */}
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
        Easy Button {/* why easy button? */}
      </button>

      {/* DISPLAY OF SUBSTITUTE WORDS AND REWORDED TEXT */}
      <div>
        <SwapText verses={verses} />
      </div>
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
