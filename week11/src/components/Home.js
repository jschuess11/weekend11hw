import React from "react";
import '../styles/home.css'
import downtownPic from "../assets/downTownPic.jpg"
import {FaChessQueen} from "react-icons/fa";

const Home = () => {
  return (
    <div>
    <div class="home container-fluid">
    <img className="homeimg" src={downtownPic} alt="Downtown Cincinnati" />
    <p class="landing-text"><FaChessQueen /> Cincinnati: Queen of the Midwest! <FaChessQueen /></p>
    <p class="paragraph-text">Cincinnati, Ohio was settled in 1788 and sits on the Ohio River in southwest Ohio and faces Kentucky across the river. Cincinnati is home to many interesting foods and a variety of entertainment for all.  There are multiple professional sports teams in Cincinnati and there are multiple universities and colleges. Cincinnati is a great place to visit in the Midwest.</p>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block w-100" src="" data-src="" alt="900x400" data-holder-rendered="true" style="width: 900px; height: 400px;"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" data-src="" alt="" data-holder-rendered="true" style="width: 900px; height: 400px;"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
  );
};

export default Home;