import React from 'react'
import './navbar.css'
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    return (
      <div className='navbar'>
        <div className='left-part'>
          <p className='company-name'>E-COMM</p>
        </div>
        <div className='right-part'>
          <ul>
            <li>Home</li>
            <li>Electronics</li>
            <li>Books</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Clothing</li>
            <li>Games</li>
            <li>More</li>
          </ul>
          <div className='search-bar'>
                <AiOutlineSearch className='search-icon' />
                <input type="text" placeholder="Search something" />
        </div>
        </div>
      </div>
    );
  };
  

export default Navbar