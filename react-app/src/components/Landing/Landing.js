import React from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
import './Landing.css';

export default function Landing(){
    const user = useSelector(state=>Object.values(state.session))
    
    return (
      <div>
        <div className="landingPageDiv">
          {!user[0] && (
            <div className="salesPitchContainer">
              <p className="joinUsText">
                Create An Account To Begin Planning Your Next Vacation!
              </p>

              <Link to="/sign-up" className="signUpLink">
                Sign Up Today!
              </Link>
            </div>
          )}
          {user[0] && (
            <div className="salesPitchContainer">
              <p className="joinUsText">
                Click on Home In The Nav Bar To Start Exploring!
              </p>

            </div>
          )}
          <div className="splashDiv"></div>
          <p className="joinUsText2">
            Plan > Confirm > Drop > Explore > Extract
          </p>
        </div>
        <Footer/>
      </div>
    );
}