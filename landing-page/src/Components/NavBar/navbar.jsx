
import './navbar.css';
import React, { useState } from 'react';
import HeadLogo from  '../NavBar/HeadLogo.png';
import About from '../NavBar/About';
import Services from '../NavBar/Services';
import Inspiration from '../NavBar/Insipiration';
import Contact from '../NavBar/Contact';


 function Nav() {
  const [status, setstutas] = React.useState(false);
    return (
      <>
      <div>
        {status ? <aside className="sidebar">
          <div className="sidebar-header">
          <button onClick={() => setstutas(false)} className="close-btn">
          <i className="ri-close-circle-fill"></i>
          </button>
        </div>
          <ul className="links2">
            <li>
              <a href={About}>ABOUT</a>
            </li>
            <li>
              <a href={Services}>SERVICES</a>
            </li>
            <li>
              <a href={Inspiration}>INSPIRATION</a>
            </li>
            <li>
              <a href={Contact}>CONTACT</a>
            </li>
          </ul>
        </aside> : null
        }
        <div className="container-1">
        <nav className='head-Nav-Bar'>
        <div className="Molinari-Travel-logo" >
          
        <a href="/" className='Header-branding' data-content-field="site-title" >
        <img src={HeadLogo} alt="Molinari Travel" sizes="240px"  srcSet="//images.squarespace-cdn.com/content/v1/5ecd6e6ac186e908ce91b5ca/1590614939567-9N9QD405UQW4NMC2UFST/Molinari+Travel+travel+agency+website%2C+luxury+travel+company%2C+itinerary+planner.png?format=100w 100w, //images.squarespace-cdn.com/content/v1/5ecd6e6ac186e908ce91b5ca/1590614939567-9N9QD405UQW4NMC2UFST/Molinari+Travel+travel+agency+website%2C+luxury+travel+company%2C+itinerary+planner.png?format=300w 300w, //images.squarespace-cdn.com/content/v1/5ecd6e6ac186e908ce91b5ca/1590614939567-9N9QD405UQW4NMC2UFST/Molinari+Travel+travel+agency+website%2C+luxury+travel+company%2C+itinerary+planner.png?format=500w 500w, //images.squarespace-cdn.com/content/v1/5ecd6e6ac186e908ce91b5ca/1590614939567-9N9QD405UQW4NMC2UFST/Molinari+Travel+travel+agency+website%2C+luxury+travel+company%2C+itinerary+planner.png?format=750w 750w, //images.squarespace-cdn.com/content/v1/5ecd6e6ac186e908ce91b5ca/1590614939567-9N9QD405UQW4NMC2UFST/Molinari+Travel+travel+agency+website%2C+luxury+travel+company%2C+itinerary+planner.png?format=1000w 1000w, //images.squarespace-cdn.com/content/v1/5ecd6e6ac186e908ce91b5ca/1590614939567-9N9QD405UQW4NMC2UFST/Molinari+Travel+travel+agency+website%2C+luxury+travel+company%2C+itinerary+planner.png?format=1500w 1500w, //images.squarespace-cdn.com/content/v1/5ecd6e6ac186e908ce91b5ca/1590614939567-9N9QD405UQW4NMC2UFST/Molinari+Travel+travel+agency+website%2C+luxury+travel+company%2C+itinerary+planner.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs" />
        </a>
          </div>
          <button onClick={() => setstutas(!status)} 
          className="sidebar-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>

          </button>
        </nav>
       </div>
       <aside className='sidebarr' >

      <div class="Header-nav-inner">
        <a href={About} className="Header-nav-item" name='About' >ABOUT</a>
        <a href={Services} className="Header-nav-item" name='services'>SERVICES</a>
      </div>
      <div className="Header-nav-inners">
      <a href={Inspiration} className="Header-nav-item" name='inpsiration'>INSPIRATION</a><a href={Contact} class="Header-nav-items" name='contact'>CONTACT</a>
      </div>
        </aside>
        </div>
       </>
    );
  }
  
  export default Nav;