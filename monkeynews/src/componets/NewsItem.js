import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,descc,imgUrl,newsUrl} = this.props
    return (
     
        <div className="card " style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descc}</p>
            <a href={newsUrl} rel="noreferrer"  className="btn btn-dark" target={"_blank"}>
              More..
            </a>
          </div>
      
       
      </div>
    );
  }
}
