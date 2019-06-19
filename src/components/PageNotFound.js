import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link to="/"><button className="btn btn-outline-dark btn-block">Take Me Home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;