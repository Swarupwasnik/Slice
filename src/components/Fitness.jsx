import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Fitness() {
let[data,setData]=useState([])
  let News=()=>{
axios.get("https://newsapi.org/v2/top-headlines?entertainment=in&apiKey=1dc195bce02f466591c8f861ad7a3cdb")
.then((response)=>{
// /console.log(response);
setData(response.data.articles)
})
  };
  return (
    <>
<div className='container my-3'>

<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" onClick={News}>General</a>
  </li>
  </ul>
</div>

<div className='container'>
<div className='row'>
  {
    data.map((value)=>{
      return(
        <div className='col-4'>
  <div className="card" style={{width:"18rem"}}>
  <img src={value.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default Fitness;


