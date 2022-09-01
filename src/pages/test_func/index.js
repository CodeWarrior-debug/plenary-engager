import "./styles.css";
import React, { useEffect, useState} from "react";
import axios from "axios";


export default function TestFunc() {
  
  const [chapters, setChapters] = useState([]);

  const Chapter = (chapters) => (
    chapters.map(chapter => (
      <div></div>
    ))


  )
  

  


      useEffect(() => {

        var config = {
          method: 'get',
          url: 'https://api.scripture.api.bible/v1/bibles/bba9f40183526463-01/books/GEN/chapters',
          headers: { 
            'api-key': '016b11d5817b02cc37b96070428b0525'
          }
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setChapters(chapters.push(response.data.number));
        })
        .catch(function (error) {
          console.log(error);
        });
      },[])


  return(
<h1>Hello!</h1>

  );
}

