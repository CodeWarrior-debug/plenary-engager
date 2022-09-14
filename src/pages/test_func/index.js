// import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import DivTest from "../components/div_test";

export default function TestFunc() {
  const booksArray = require("../../assets/books_w_chapters.json");
  const verseCount=require("../../assets/book_chapters_w_versecounts.json");
  const [verse, setVerse]=useState("");
  const [chapters, setChapters] = useState("");
  const [chapter, setChapter] = useState("");
  const [book, setBook] = useState("");
  const [label, setLabel] = useState("");
  const [chaptersArr, setChaptersArr] = useState([]);
  const [verseArr, setVerseArr] = useState([]);
  const [stampChap, setStampChap] = useState("");
  const [bookDashChap, setBookDashChap] = useState("");
  // const [stampVerse, setStampVerse] = useState("");

  useEffect(() => {
    console.log(verseCount[label + '-' + stampChap]);
  },[])

  let updateChapters = (e) => {
    setChapters(e.chapter_count);
    setBook(e.value);
    setLabel(e.label);
    populateChapters(e.chapter_count);
  };

  let stampChapters = (e) => {
    setStampChap(e.label);
  };

  let stampVerses = (e) => {
    setVerse(e.label);
  };
  
    const populateChapters = (max) => {
      let chapArr = [];
      for (var i = 1; i <= max; i++) {
        chapArr.push({ label: i }); //label has to be an object
      }
      setChaptersArr(chapArr);
    };
  
    const populateVerses = (max) => {
      let verseArr = [];
      for (var i = 1; i <= max; i++) {
        verseArr.push({ label: i }); //label has to be an object
      }
      setVerseArr(verseArr);
    };

  const evalBookChap=()=>{
    
    setBookDashChap(label + '-' + stampChap)
    console.log('bookdashchap is' + bookDashChap)
    console.log(verseCount.bookDashChap)
  }

  const BookSelect = () => (
    <Select options={booksArray} onChange= {(e) =>{ updateChapters(e); evalBookChap();}} />
  );

  const ChapterSelect = () => (
    <Select options={chaptersArr} onChange={(e) => {stampChapters(e); evalBookChap();}} />
  );

  const VerseSelect = () => (
    <Select options={verseArr} onChange={stampVerses} />
  );

  return (
    <>
      <h1>Choose A Range of Verses</h1>
      <BookSelect />
      <ChapterSelect chapters={chapters} />
      <VerseSelect verse={verse} />
      <DivTest number={label} />
      <DivTest number={book} />
      <DivTest number={chapters} />
      <DivTest number={stampChap} />
      <DivTest number={verse} />
    </>
  );
}
