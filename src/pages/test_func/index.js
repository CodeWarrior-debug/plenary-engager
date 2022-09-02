import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import DivTest from "../components/div_test";

export default function TestFunc() {
  let testNum = 5;
  const booksArray = require("../../assets/books_w_chapters.json");
  const [chapters, setChapters] = useState("");
  const [book, setBook] = useState("");
  

  let updateChapters = e => {
    setChapters(e.chapter_count);
    setBook(e.value);
    //why can't I see the chapter picked anymore?
  };
  let updateBook = () => {};

  const BookSelect = () => (
    <Select options={booksArray} onChange={updateChapters} />
  );

  useEffect(() => {
    let book = "GEN";

    var config = (book = {
      method: "get",
      url:
        "https://api.scripture.api.bible/v1/bibles/bba9f40183526463-01/books/" +
        book +
        "/chapters",
      headers: {
        "api-key": "016b11d5817b02cc37b96070428b0525",
      },
    });

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Hello!</h1>
      <BookSelect />
      <DivTest number={book} />
      <DivTest number={chapters} />
    </>
  );
}
