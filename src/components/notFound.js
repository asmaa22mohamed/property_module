import React from 'react';
import { Link } from 'react-router-dom';

import errorpage from '../assets/images/error.png';

const Error = () => {
  return (
    <React.Fragment>
      <div className='error'>
        <h2>404</h2>
        <img src={errorpage} alt=''></img>
        <button className='mainbtn'>
          <Link to='/'>Back Home</Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Error;
