import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './homepage.css';
import imdbLogo from './images/imdblogo.png';
import { Link } from 'react-router-dom';
import dunePost from './images/dune-poster.png';
import dMov from './images/d-mov.png';
import pMov from './images/p-mov.png';
import kMov from './images/k-mov.png';
import sMov from './images/s-mov.png';
import fMov from './images/f-mov.png';
import kfMov from './images/kf-mov.png';

// for the buttons on the side of the movies
const ArrowButton = ({ direction }) => {
    return (
        <button className={`arrow-button ${direction}`}>
          {direction === "left" ? '◀' : '▶'}
        </button>
      );
  };
    

// this gets you the circle with the score of the movie 
function CircleScore({ score, size = 100, strokeWidth = 10 }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (score / 100) * circumference;
  
    const circleStyle = {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: offset,
    };
  
    return (
      <svg width={size} height={size} className="circle-score">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="#ddd" // Background circle color
        />
        {/* Foreground circle (score) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="black" 
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={circleStyle}
        />
        {/* Score text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#333"
          fontSize={size / 4}
          fontWeight="bold"
        >
          {score}%
        </text>
      </svg>
    );
  }


// houses all elements on the home page
function Homepage() {
  // State to keep track of the currently active content
  const [activeContent, setActiveContent] = useState('movies');

  // Function to change the active content based on button clicked
  const handleChangeContent = (newContent) => {
    setActiveContent(newContent);
  };
    return (
        <div className="main-page">
            <header>
                <nav className="navBar"> 
                    <div className="nav-cont"> 
                        {/* Left icons */}
                        <div className="nav-icons">
                            <img className="img" src={imdbLogo} alt="Logo" />
                        </div>
                        {/* Search bar */}
                        <div className="search-container">
                            <input className="search-bar" placeholder="Type something..." />
                        </div>
                        {/* Right buttons */}
                        <div className="nav-buttons">
                            <button className="sign-in">Sign-In</button>
                            <button className="en">En</button>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {/* Movie Posters (titles, ratings, small desc) */}
                <div className="movie-slider">
                    <img className="dune-img" src={dunePost} alt="Dune Part Two" />
                    {/* this allows stuff over the img */}
                    <div className="overlay-content"> 
                        <p className="dune-mov-title">Dune: Part Two</p>
                        <p className="dune-mov-des">2h 46m / sci-fi, action, adventure</p>
                        {/* holds watch btn and score  */}
                        <div className="watch-score-cont"> 
                            <button className="watch-btn">Watch Trailer</button>
                            <CircleScore score={90} />
                        </div>
                    </div>
                </div>
                <div className = "movie-ctn"> 
                { /* nav bar for the move,tv,ppl,community buttons  */}
                    <header> 
                        <nav className="navBar"> 
                            <div className="nav-cont"> 
                                <div className = "titles">
                                <button className="mov-tit" onClick={() => handleChangeContent('movies')}>MOVIES</button>
                                <button className="tv-tit" onClick={() => handleChangeContent('tv')}>TV SERIES</button>
                                <button className="ppl-tit" onClick={() => handleChangeContent('people')}>PEOPLE</button>
                                <button className="com-tit" onClick={() => handleChangeContent('community')}>COMMUNITY</button>
                                </div> 
                            </div>
                            <div className="Line" style={{width: '100%', height: '100%', border: '1px white solid'}}></div>
                        </nav>
                    </header> 
                    { /* section for housing different movies and their titles */}
                    {activeContent === 'movies' && <div>
                        <p className = "mov-title"> See What's Trending Now</p>
                        <div className = "mov-holder">
                            <div className="movies">
                            <ArrowButton direction="left" />
                                <div className="movie">
                                    <img className="mov-img" src={dMov} alt="Dune: Part 2" />
                                    <p className="mov-title2">Dune: Part 2</p>
                                </div>
                                <div className="movie">
                                    <img className="mov-img" src={pMov} alt="Pulp Fiction" />
                                    <p className="mov-title2">Pulp Fiction</p>
                                </div>
                                <div className="movie">
                                    <img className="mov-img" src={kMov} alt="Kung Fu Panda 4" />
                                    <p className="mov-title2">Kung Fu Panda 4</p>
                                </div>
                                <div className="movie">
                                    <img className="mov-img" src={sMov} alt="Space Odyssey" />
                                    <p className="mov-title2">Space Odyssey</p>
                                </div>
                                <div className="movie">
                                    <img className="mov-img" src={fMov} alt="Fight Club" />
                                    <p className="mov-title2">Fight Club</p>
                                </div>
                                <div className="movie">
                                    <img className="mov-img" src={kfMov} alt="Killers of the Flower Moon" />
                                    <p className="mov-title2">Killers of the Flower Moon</p>
                                </div>
                                <ArrowButton direction="right" />
                            </div>
                        </div>
                    </div>}
                    {activeContent === 'tv' && <div>TV Series content here</div>}
                    {activeContent === 'people' && <div>People content here</div>}
                    {activeContent === 'community' && <div>Community content here</div>}
                </div> 
            </main>
        </div>
    );
}

export default Homepage;