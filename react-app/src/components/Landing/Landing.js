import React from "react";
import {Link} from 'react-router-dom';
import './Landing.css';

export default function Landing(){
    const spacing='   '
    return (
      <div>
        <div className="landingPageDiv">
          <div className="salesPitchContainer">
            <p className="joinUsText">
              Create An Account To Begin Planning Your Next Vacation!
            </p>

            <Link to="/sign-up" className="signUpLink">
              Sign Up Today!
            </Link>
          </div>
          <div className="splashDiv"></div>
          <p className="joinUsText2">Plan > Confirm  > Drop  > Stay  > Extract</p>
        </div>
      </div>
    );
}