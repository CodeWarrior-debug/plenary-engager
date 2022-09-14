// import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import DivTest from "../components/div_test";

export default function TestFunc() {
  const booksArray = require("../../assets/books_w_chapters.json");
  const verseCountArr=require("../../assets/book_chapters_w_versecounts.json");
  const [verse, setVerse]=useState("");
  const [chapters, setChapters] = useState("");
  const [book, setBook] = useState("");
  const [label, setLabel] = useState("");
  const [chaptersArr, setChaptersArr] = useState([]);
  const [verseArr, setVerseArr] = useState([]);
  const [stampChap, setStampChap] = useState("");
  const [stampVerse, setStampVerse] = useState("");

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
    setStampVerse(e.label);
  };

  const BookSelect = () => (
    <Select options={booksArray} onChange={updateChapters} />
  );

  const populateChapters = (max) => {
    let chapArr = [];
    for (var i = 1; i <= max; i++) {
      chapArr.push({ label: i }); //has to be an object
    }
    setChaptersArr(chapArr);
  };

  const populateVerses = (max) => {
    let verseArr = [];
    for (var i = 1; i <= max; i++) {
      verseArr.push({ label: i }); //has to be an object
    }
    setVerseArr(verseArr);
  };

  const ChapterSelect = (chapters) => (
    <Select options={chaptersArr} onChange={stampChapters} />
  );

  const VerseSelect = (chapters) => (
    <Select options={verseArr} onChange={stampVerses} />
  );

  return (
    <>
      <h1>Choose A Range of Verses</h1>
      <BookSelect />
      <ChapterSelect chapters={chapters} />
      <ChapterSelect verses={verses} />
      <DivTest number={label} />
      <DivTest number={book} />
      <DivTest number={chapters} />
      <DivTest number={stampChap} />
      <DivTest number={stampVerse} />
    </>
  );
}
