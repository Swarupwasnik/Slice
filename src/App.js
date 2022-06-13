// import React, { useState } from "react";
// import ReactDOM from "react-dom";
import React,{useState} from 'react';
import "./App.css";
import axios from 'axios';
// import {BrowserRouter as Routes, Route,BrowserRouter} from 'react-router-dom';
import Fitness from './components/Fitness';

// import News from './components/'
// import { Link } from 'react-router-dom';
// import Fitness from '../components/Fitness';
function News() {
let[data,setData]=useState([])
  let getNews=()=>{
axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9d6a323cad5c4db082d800f05db0a21d`)
.then((response)=>{
// /console.log(response);
setData(response.data.articles)
})
  
  }



  return (


    <>

<div>
    <h1 className='head'> <span className='span'>The</span>Siren</h1>
    </div>
<div className='container my-3'>

<ul className="nav justify-content-center">
  <li className="nav-item">
  <a className='nav-item active' onClick={getNews}>Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link  active" onClick={getNews}>Bollywood</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active"onClick={getNews}>Fitness</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " onClick={getNews}>Technology</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " onClick={getNews}>Holloywwod</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " onClick={getNews}>Fitness</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " onClick={getNews}>Food</a>
  </li>
</ul>
</div>

<div className='container'>
<div className='row'>
  {
    data.map((value)=>{
      return(
      
      
      <div className='block'>
      <div className='card'>
        <img src={value.urlToImage} alt="" />
        <div className='card1'>
          <h5 className='title'>{value.title}</h5>
          <p className='description'>{value.description}
    <a type="button" onClick={value.url} className='button'>Read More</a>
    </p>
        </div>
    
      </div>
    </div>
  //       <div className='col-4'>
  // <div className="card" style={{width:"18rem"}}>
  // <img src={value.urlToImage} className="card-img-top" alt="..."/>
  // <div className="card-body">
  //   <h5 className="card-title">{value.title}</h5>
  //   <p className="card-text">{value.description}</p>
  //   <button type="button" class="btn btn-primary" onClick={value.url}>Read</button>


 
      )
    })
  }
  
</div>

</div>

    </>
  )
}

export default News;