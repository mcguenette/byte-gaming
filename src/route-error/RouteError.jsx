import React from 'react'
import './route-error.css';

function RouteError() {
    return (
      <div className='container flex route-error-div'>
          <h2 className='error-page-text'>404</h2>
          <p>
            Page not found :(
          </p>
      </div>
    );
  }

export default RouteError
