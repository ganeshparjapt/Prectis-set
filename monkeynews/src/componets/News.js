import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    console.log("i am  constrector in news.js");
    this.state = {
      articles: [],
      loading: false,
      page : 1
    };
  }
   async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedata = await data.json()

    console.log(parsedata);
    this.setState({articles: parsedata.articles ,totalResult : parsedata.totalResult})
  }
  handlePrevClick = async()=>{
    console.log("handle preview ");
       
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json()
    this.setState({
      page : this.state.page - 1,
      articles: parsedata.articles
    })

  }
  handleNextClick = async ()=>{
    console.log("handle next ")
    if(this.state.page + 1 > Math.ceil(this.state.totalResult/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&page=${this.state.page + 1}&pageSize=20`;
    
    let data = await fetch(url);
    let parsedata = await data.json()
    this.setState({
      page : this.state.page + 1, 
      articles: parsedata.articles
    })
  }

  }

  render() {
    console.log("render")

    return (
      <div className="container my-3">
        <h3>Monkey today news headlines</h3>

        <div className="row my-3">
          {this.state.articles.map((elements) => {
            return (
              <div className="col-md-4" key={elements.url}>
                <NewsItem
                  title={elements.title}
                  descc={elements.description}
                  imgUrl={
                    elements.urlToImage === null
                      ? "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/jeremy-strong-sarah-snook-kieran-culkin-H-2023.jpg?w=1024"
                      : elements.urlToImage
                  }
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}
