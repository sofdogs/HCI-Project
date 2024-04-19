import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './movie-info.css';
import imdbLogo from './images/imdblogo.png';
import barbiePost from './images/barbie-poster.png'
import playIcon from './images/play-icon.png'


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
          stroke="#FBD651"
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

function MovieInfo() {
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
                    <img className="barbie-img" src={barbiePost} alt="barb" />
                    {/* this allows stuff over the img */}
                    <div className="overlay"> 
                        {/* holds watch btn and score  */}
                        <div className="score-cont"> 
                            <button className="watch-btn">Watch Trailer</button>
                            <CircleScore score={68} />
                        </div>
                    </div>
                </div>
                <div className ="title-holder"> 
                    <button className="Rectangle4">FULL CAST</button>
                    <button className="Rectangle5">MOVIE DETAILS</button>
                    <button className="Rectangle6"> REVIEWS</button>
                </div>
            </main>
        </div>
    );
  }
  
  export default MovieInfo;
  