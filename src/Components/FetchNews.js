import React, { useState } from 'react'
import axios from 'axios'

function FetchNews() {
    const [news, setNews] = useState([])
    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=0494b78a89354bdf8e333ee78308e1b0")
            .then((response) => {
                console.log(response)
                setNews(response.data.articles)
            })
    }
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-2">
                    {
                        news.map((value) => {
                            return (
                                <div classname="col-4">
                                    <div classname="card" style={{  width: "18rem" ,marginLeft:"2rem" ,marginBottom:"1rem",boxShadow: '1px 2px 20px #F4AAB9',padding: '1em' ,overflow:"auto" , maxHeight:"27rem"}}>
                                        <img src={value.urlToImage} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href="#" className="btn btn-primary">Main</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default FetchNews


