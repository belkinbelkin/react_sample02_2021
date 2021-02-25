import {GiOfficeChair} from 'react-icons/gi';
import React from 'react';
import './Header.css';

/**
 * Stateless header component
 */

export default function Header() {
  return <div className='header-wrapper'>
    <div className='header-label-container'>
      <GiOfficeChair color='#fff' size={40}/>
      <span className='header-wrapper-text'>Back office</span>
    </div>
  </div>;
}