import React, { Component, Fragment ,useRef ,useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./landing-page.css";
import Confetti from "react-confetti";
function LandingPage() {
  
    return (
   <div className="landingPage">
    <div className='titlepage'>
  <h2  className="title_landing">Birdthay Blash</h2> 
  <span className="description_landing">!!</span>
  
  </div>
  <p className="subtitle_landing">Birdthay Blash is only for this page ,register for this event birdhay enjoy it.</p>
  <div className="btnlanding">
  <button >
    <Link to="/event" style={{ textDecoration: "none" }}>
           Get Started
            </Link>
          </button>

          </div>
{/* <Confetti /> */}
   </div>
 
      // <Fragment>
       
      //   <section className="landing">
        
      //     <br />
      //     <button>
      //       <Link to="/event" style={{ textDecoration: "none" }}>
      //         Get Started
      //       </Link>
      //     </button>
      //   </section>
      // </Fragment>
    );
  
}

export default LandingPage;

