import "./styles.css";
import React from "react";
import axios from "axios";

export default class Test extends React.Component {
  state = {
    verseRange: "",
  };

  componentDidMount() {
    axios
      .get("https://bible-api.com/john%203:16?translation=kjv")
      .then((res) => {
        const verseRange = res.data.text;
        this.setState({ verseRange });
      });
  }

  render() {
    return <div>{this.state.verseRange}</div>;
  }
}
