import "./styles.css";
import React, { useEffect, useState} from "react";
import axios from "axios";


export default function TestFunc() {
  
  const [verses, setVerses] = useState('');

  useEffect(() => {
    axios
      .get("https://bible-api.com/john%203:16?translation=kjv")
      .then((res) => {
        setVerses(res.data.text)
      });
  })


  // componentDidMount() {
  //   axios
  //     .get("https://bible-api.com/john%203:16?translation=kjv")
  //     .then((res) => {
  //       const verseRange = res.data.text;
  //       this.setState({ verseRange });
  //     });
  // }


  return(

<div>{verses}</div>

  );
}

