import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h3>Monkey today news headlines</h3>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}
