import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFlask, faIdBadge, faLaptop } from '@fortawesome/free-solid-svg-icons'; // Import the desired icons
import './Stuside.css';

const Stusidebar = () => {
  return (
    <div className='sidebar-container'>
      <ul>
        <Link to='/course'>
          <li>
            <FontAwesomeIcon icon={faBook} /> Courses
          </li>
        </Link>
        <Link to='/labs'>
          <li>
            <FontAwesomeIcon icon={faFlask} /> Labs
          </li>
        </Link>
        <Link to='/online-platforms'>
          <li>
            <FontAwesomeIcon icon={faLaptop} /> Online Platforms
          </li>
        </Link>
        <Link to='/mock-interview'>
          <li>
            <FontAwesomeIcon icon={faIdBadge}/>Mock-Interview
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Stusidebar;
