import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
  
    "author": null,
    "title": "UN calls for immediate Russian withdrawal from Ukraine - The Guardian",
    "description": "RaiseBE Private Limited is a technology services company that helps clients design, develop, and deploy custom applications and solutions. We partner with our clients to help them overcome their business challenges, using the latest software development methodologies and tools.",
    "url": "https://accounts.google.com/v3/signin/identifier?dsh=S-2113820747:1677214292502376&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiZGh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS93b3JsZC8yMDIzL2ZlYi8yMy91bi1jYWxscy1mb3ItaW1tZWRpYXRlLXJ1c3NpYW4td2l0aGRyYXdhbC1mcm9tLXVrcmFpbmXSAWRodHRwczovL2FtcC50aGVndWFyZGlhbi5jb20vd29ybGQvMjAyMy9mZWIvMjMvdW4tY2FsbHMtZm9yLWltbWVkaWF0ZS1ydXNzaWFuLXdpdGhkcmF3YWwtZnJvbS11a3JhaW5l%3Foc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfidm0QNDUvjw3mU3o-r_ZKZEyQVXLJpn3OrpzEwb50QzJZEazDKG4dtSHPX-lwBja1PP2-1g",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/02/166488_0002.jpg?w=260&h=150&crop=1",
    "publishedAt": "2023-02-24T04:28:00Z",
    "content": "Not your computer? Use Guest mode to sign in privately. Learn more"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Police: Over 30 shots fired as 7 are shot, including 5 teens and a toddler, near Strawberry Mansion school - FOX 29 Philadelphia",
    "description": "RaiseBE Private Limited is a technology services company that helps clients design, develop, and deploy custom applications and solutions. We partner with our clients to help them overcome their business challenges, using the latest software development methodologies and tools.",
    "url": "https://accounts.google.com/v3/signin/identifier?dsh=S-1845217547:1677214292492194&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiggFodHRwczovL3d3dy5mb3gyOS5jb20vbmV3cy9wb2xpY2Utb3Zlci0zMC1zaG90cy1maXJlZC1hcy03LWFyZS1zaG90LWluY2x1ZGluZy01LXRlZW5zLWFuZC1hLXRvZGRsZXItbmVhci1zdHJhd2JlcnJ5LW1hbnNpb24tc2Nob29s0gGGAWh0dHBzOi8vd3d3LmZveDI5LmNvbS9uZXdzL3BvbGljZS1vdmVyLTMwLXNob3RzLWZpcmVkLWFzLTctYXJlLXNob3QtaW5jbHVkaW5nLTUtdGVlbnMtYW5kLWEtdG9kZGxlci1uZWFyLXN0cmF3YmVycnktbWFuc2lvbi1zY2hvb2wuYW1w%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfLp_9GTqAPDFZzki5pNVlxcCihDx-mJXV0NgSlbFClycoXQKvsMmq2JzykjawSqSPzaMKJiA",
    "urlToImage": null,
    "publishedAt": "2023-02-24T03:45:05Z",
    "content": "Not your computer? Use Private Browsing windows to sign in. Learn more"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "'Grey's Anatomy': How Meredith Bid Farewell To Seattle Amid Heartache & Hope And Set Up Series' Future - Deadline",
    "description": "RaiseBE Private Limited is a technology services company that helps clients design, develop, and deploy custom applications and solutions. We partner with our clients to help them overcome their business challenges, using the latest software development methodologies and tools.",
    "url": "https://accounts.google.com/v3/signin/identifier?dsh=S-1694044185:1677214308704230&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMia2h0dHBzOi8vZGVhZGxpbmUuY29tLzIwMjMvMDIvZ3JleXMtYW5hdG9teS1tZXJlZGl0aC1mYXJld2VsbC1zZWF0dGxlLXNlcmllcy1mdXR1cmUtZWxsZW4tcG9tcGVvLTEyMzUyNjgzNjAv0gEA%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfA8aBLDgws2vxJkhmGG5Hd6QaYVljumLjxUG34MgiOpTNs2CA2SfqZ_bOJQd5DgvnT3lGK5A",
    "urlToImage": null,
    "publishedAt": "2023-02-24T03:00:00Z",
    "content": "Not your computer? Use a private browsing window to sign in. Learn more"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "LIVE: In-Depth Look At The 1 Year Of Ukraine-Russia War, India's Unwavering Stance & Impact Of War - India Today",
    "description": "RaiseBE Private Limited is a technology services company that helps clients design, develop, and deploy custom applications and solutions. We partner with our clients to help them overcome their business challenges, using the latest software development methodologies and tools.",
    "url": "https://accounts.google.com/v3/signin/identifier?dsh=S-1157404513:1677215355340255&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCCAiC1pLTHBKQmJ0NlNNmAEB%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHdmtOhiCaWiOfOfcrzrTa-oUgtGXhCTxyhDlsStqQAAJaYurqk6pel6qBa6X00vR4WsSkb0vw",
    "urlToImage": null,
    "publishedAt": "2023-02-24T02:55:59Z",
    "content": "Not your computer? Use a private browsing window to sign in. Learn more"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Harvey Weinstein Sentenced to 16 Additional Years in Prison After Los Angeles Trial - Rolling Stone",
    "description": "RaiseBE Private Limited is a technology services company that helps clients design, develop, and deploy custom applications and solutions. We partner with our clients to help them overcome their business challenges, using the latest software development methodologies and tools.",
    "url": "https://accounts.google.com/v3/signin/identifier?dsh=S-2080195542:1677214293131120&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMidGh0dHBzOi8vd3d3LnJvbGxpbmdzdG9uZS5jb20vdHYtbW92aWVzL3R2LW1vdmllLW5ld3MvaGFydmV5LXdlaW5zdGVpbi1zZW50ZW5jZWQtcHJpc29uLWxvcy1hbmdlbGVzLXRyaWFsLTEyMzQ2NTc0NDMv0gF4aHR0cHM6Ly93d3cucm9sbGluZ3N0b25lLmNvbS90di1tb3ZpZXMvdHYtbW92aWUtbmV3cy9oYXJ2ZXktd2VpbnN0ZWluLXNlbnRlbmNlZC1wcmlzb24tbG9zLWFuZ2VsZXMtdHJpYWwtMTIzNDY1NzQ0My9hbXAv%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHdoz6FZBmdVgvhU9JjHIM3Rl1MgtMWwlDeTQVZVrN1CJ8A4VwkLMsnxCxD1ToZWE7SGPb-o",
    "urlToImage": null,
    "publishedAt": "2023-02-24T02:25:05Z",
    "content": "Not your computer? Use InPrivate windows to sign in. Learn more"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "TV station identifies slain reporter among the 3 killed -- including a child -- in a Florida shooting spree - CNN",
    "description": "RaiseBE Private Limited is a technology services company that helps clients design, develop, and deploy custom applications and solutions. We partner with our clients to help them overcome their business challenges, using the latest software development methodologies and tools.",
    "url": "https://accounts.google.com/v3/signin/identifier?dsh=S-1224728519:1677214292551201&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiVGh0dHBzOi8vd3d3LmNubi5jb20vMjAyMy8wMi8yMy91cy9mbG9yaWRhLW9yYW5nZS1jb3VudHktc2hvb3RpbmctdGh1cnNkYXkvaW5kZXguaHRtbNIBWGh0dHBzOi8vYW1wLmNubi5jb20vY25uLzIwMjMvMDIvMjMvdXMvZmxvcmlkYS1vcmFuZ2UtY291bnR5LXNob290aW5nLXRodXJzZGF5L2luZGV4Lmh0bWw%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHeBSTBu56cJPFHPSTgZWOLz_fbjuX4vxx7nkfB_QMLe62kUxkzpZ5qDn_RCNp6XjVyg28Jqbw",
    "urlToImage": null,
    "publishedAt": "2023-02-24T01:57:00Z",
    "content": "Not your computer? Use a Private Window to sign in. Learn more"
    },
    {
    "source": {
    "id": null,
    "name": "Hollywood Reporter"
    },
    "author": "Lesley Goldberg",
    "title": "Succession Ending With Season 4 on HBO - Hollywood Reporter",
    "description": "Creator Jesse Armstrong confirmed that the upcoming installment will be its last.",
    "url": "https://www.hollywoodreporter.com/tv/tv-news/succession-ending-with-season-4-on-hbo-1235333216/",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/jeremy-strong-sarah-snook-kieran-culkin-H-2023.jpg?w=1024",
    "publishedAt": "2023-02-24T01:41:15Z",
    "content": "Succession, the Emmy-winning HBO drama that helped redefine the premium cable network following the end of Game of Thrones, is ending.\r\nCreator and showrunner Jesse Armstrong revealed that the upcomi… [+4576 chars]"
    }
]
constructor (){
  super();
  console.log("i am  constrector in news.js");
  this.state = {
    articles: this.articles,
    loading: false,
  }
}
  
  render() {
    return (
      <div className="container my-3">
        <h3>Monkey today news headlines</h3>
     
        <div className="row my-3">
        {this.state.articles.map((elements) => {
          return <div className="col-md-4" key={elements.url}>
          <NewsItem   title={elements.title.slice(0 ,40)}
          descc={elements.description.slice(0, 88)}
          imgUrl={elements.urlToImage === null ? "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/jeremy-strong-sarah-snook-kieran-culkin-H-2023.jpg?w=1024" : elements.urlToImage }
          newsUrl={elements.url}/>
        </div>
          
          
        })}
         
        </div>
      </div>
    );
  }
}
