import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import DivTest from "../components/div_test";

export default function TestFunc() {
  const booksArray = require("../../assets/books_w_chapters.json");
  const [chapters, setChapters] = useState("");
  const [book, setBook] = useState("");
  const [label, setLabel] = useState("");
  const [chaptersArr, setChaptersArr] = useState([]);
  

  let updateChapters = (e) => {
    setChapters(e.chapter_count);
    setBook(e.value);
    setLabel(e.label);
  };

function populateChapters(max){
  let chapArr=[];
  for (let i = 1;i<=max;i++){
    chapArr.push(i);
  }
  setChaptersArr(chapArr);
}


  let updateBook = () => {};

  const BookSelect = () => (
    <Select options={booksArray} onChange={updateChapters} />
  );

  const ChapterSelect = (chapters) => (
    <Select options={chaptersArr} onChange={populateChapters(chapters)} />
  );


  return (
    <>
      <h1>Hello!</h1>
      <BookSelect />
      <ChapterSelect chapters={chapters}/>
      <DivTest number={label} />
      <DivTest number={book} />
      <DivTest number={chapters} />
    </>
  );
}
