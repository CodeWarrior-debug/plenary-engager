import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import DivTest from "../components/div_test";

export default function TestFunc() {
  //Common Resources
  const allChaptersArr= [{"label":1}, {"label":2}, {"label":3}, {"label":4}, {"label":5}, {"label":6}, {"label":7}, {"label":8}, {"label":9}, {"label":10}, {"label":11}, {"label":12}, {"label":13}, {"label":14}, {"label":15}, {"label":16}, {"label":17}, {"label":18}, {"label":19}, {"label":20}, {"label":21}, {"label":22}, {"label":23}, {"label":24}, {"label":25}, {"label":26}, {"label":27}, {"label":28}, {"label":29}, {"label":30}, {"label":31}, {"label":32}, {"label":33}, {"label":34}, {"label":35}, {"label":36}, {"label":37}, {"label":38}, {"label":39}, {"label":40}, {"label":41}, {"label":42}, {"label":43}, {"label":44}, {"label":45}, {"label":46}, {"label":47}, {"label":48}, {"label":49}, {"label":50}, {"label":51}, {"label":52}, {"label":53}, {"label":54}, {"label":55}, {"label":56}, {"label":57}, {"label":58}, {"label":59}, {"label":60}, {"label":61}, {"label":62}, {"label":63}, {"label":64}, {"label":65}, {"label":66}, {"label":67}, {"label":68}, {"label":69}, {"label":70}, {"label":71}, {"label":72}, {"label":73}, {"label":74}, {"label":75}, {"label":76}, {"label":77}, {"label":78}, {"label":79}, {"label":80}, {"label":81}, {"label":82}, {"label":83}, {"label":84}, {"label":85}, {"label":86}, {"label":87}, {"label":88}, {"label":89}, {"label":90}, {"label":91}, {"label":92}, {"label":93}, {"label":94}, {"label":95}, {"label":96}, {"label":97}, {"label":98}, {"label":99}, {"label":100}, {"label":101}, {"label":102}, {"label":103}, {"label":104}, {"label":105}, {"label":106}, {"label":107}, {"label":108}, {"label":109}, {"label":110}, {"label":111}, {"label":112}, {"label":113}, {"label":114}, {"label":115}, {"label":116}, {"label":117}, {"label":118}, {"label":119}, {"label":120}, {"label":121}, {"label":122}, {"label":123}, {"label":124}, {"label":125}, {"label":126}, {"label":127}, {"label":128}, {"label":129}, {"label":130}, {"label":131}, {"label":132}, {"label":133}, {"label":134}, {"label":135}, {"label":136}, {"label":137}, {"label":138}, {"label":139}, {"label":140}, {"label":141}, {"label":142}, {"label":143}, {"label":144}, {"label":145}, {"label":146}, {"label":147}, {"label":148}, {"label":149}, {"label":150}]
  const allVersesArr= [{"label":1}, {"label":2}, {"label":3}, {"label":4}, {"label":5}, {"label":6}, {"label":7}, {"label":8}, {"label":9}, {"label":10}, {"label":11}, {"label":12}, {"label":13}, {"label":14}, {"label":15}, {"label":16}, {"label":17}, {"label":18}, {"label":19}, {"label":20}, {"label":21}, {"label":22}, {"label":23}, {"label":24}, {"label":25}, {"label":26}, {"label":27}, {"label":28}, {"label":29}, {"label":30}, {"label":31}, {"label":32}, {"label":33}, {"label":34}, {"label":35}, {"label":36}, {"label":37}, {"label":38}, {"label":39}, {"label":40}, {"label":41}, {"label":42}, {"label":43}, {"label":44}, {"label":45}, {"label":46}, {"label":47}, {"label":48}, {"label":49}, {"label":50}, {"label":51}, {"label":52}, {"label":53}, {"label":54}, {"label":55}, {"label":56}, {"label":57}, {"label":58}, {"label":59}, {"label":60}, {"label":61}, {"label":62}, {"label":63}, {"label":64}, {"label":65}, {"label":66}, {"label":67}, {"label":68}, {"label":69}, {"label":70}, {"label":71}, {"label":72}, {"label":73}, {"label":74}, {"label":75}, {"label":76}, {"label":77}, {"label":78}, {"label":79}, {"label":80}, {"label":81}, {"label":82}, {"label":83}, {"label":84}, {"label":85}, {"label":86}, {"label":87}, {"label":88}, {"label":89}, {"label":90}, {"label":91}, {"label":92}, {"label":93}, {"label":94}, {"label":95}, {"label":96}, {"label":97}, {"label":98}, {"label":99}, {"label":100}, {"label":101}, {"label":102}, {"label":103}, {"label":104}, {"label":105}, {"label":106}, {"label":107}, {"label":108}, {"label":109}, {"label":110}, {"label":111}, {"label":112}, {"label":113}, {"label":114}, {"label":115}, {"label":116}, {"label":117}, {"label":118}, {"label":119}, {"label":120}, {"label":121}, {"label":122}, {"label":123}, {"label":124}, {"label":125}, {"label":126}, {"label":127}, {"label":128}, {"label":129}, {"label":130}, {"label":131}, {"label":132}, {"label":133}, {"label":134}, {"label":135}, {"label":136}, {"label":137}, {"label":138}, {"label":139}, {"label":140}, {"label":141}, {"label":142}, {"label":143}, {"label":144}, {"label":145}, {"label":146}, {"label":147}, {"label":148}, {"label":149}, {"label":150}, {"label":151}, {"label":152}, {"label":153}, {"label":154}, {"label":155}, {"label":156}, {"label":157}, {"label":158}, {"label":159}, {"label":160}, {"label":161}, {"label":162}, {"label":163}, {"label":164}, {"label":165}, {"label":166}, {"label":167}, {"label":168}, {"label":169}, {"label":170}, {"label":171}, {"label":172}, {"label":173}, {"label":174}, {"label":175}, {"label":176}]
  const booksArray = require("../../assets/books_w_chapters.json");
  const verseCount=require("../../assets/book_chapters_w_versecounts.json");
  
  //Verse Methods
  const [startVerse, setStartVerse]=useState("");
  const [verseArr, setVerseArr] = useState([]);
  
  
  //Chapter Methods
  const [chapters, setChapters] = useState("");
  const [chaptersArr, setChaptersArr] = useState([]);
  const [chapterStart, setChapterStart] =useState("");
  const [stampChap, setStampChap] = useState("");
  
  
  
  //Book Methods
  const [book, setBook] = useState("");
  const [bookLabel, setBookLabel] = useState("");


  useEffect(() => {
    // console.log(verseCount['Genesis-3'])
    // console.log(limitArr(25,allChaptersArr));
  },[])

  const limitArr = (e, arr) => {
   return arr.filter((i) => i.label<=e);
  }

  const updateChapters = (e) => {
    //sets book and chapter values
    // setBook(e.value);
    setBookLabel(e.label);
    setChaptersArr(
      limitArr(e.chapter_count,allChaptersArr)
    )
  };

  const updateVerses = (e) => {
    setChapterStart(e.label);
    let maxVerse = verseCount[bookLabel + '-' + e.label]
    setVerseArr(
      limitArr(maxVerse,allVersesArr)
    )
  };

  const pickStartVerse = (e) => {
    setStartVerse(e.label);
  }
  
  
    // const updateVerses = (e) => {
    //   let verseArr = [];
    //   for (var i = 1; i <= max; i++) {
    //     verseArr.push({ label: i }); //label has to be an object
    //   }
    //   setVerseArr(verseArr);
    // };

  // const evalBookChap=()=>{
    
  //   setBookDashChap(label + '-' + stampChap)
  //   console.log('bookdashchap is ' + bookDashChap)
  //   console.log(verseCount.bookDashChap)
  // }

  const BookSelect = () => (
    <Select value={{bookLabel}} options={booksArray} onChange= {(e) =>{ updateChapters(e)}} />
  );

  const ChapterSelect = () => (
    <Select options={chaptersArr} onChange={(e) => {updateVerses(e)}} />
  );

  const VerseSelect = () => (
    <Select options={verseArr} onChange={(e) => {pickStartVerse(e)}}/>
  );

  return (
    <>
      <h1>Choose A Range of Verses</h1>
      <BookSelect />
      <ChapterSelect chapters={chapters} />
      <VerseSelect startVerse={startVerse} />
      <DivTest id="bookText" number={bookLabel} />
      <DivTest id="chapStartNum" number={chapterStart} />
      <DivTest id="verseStartNum" number={startVerse} />
    </>
  );
}
