import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'


export default function Footer(){


    return (
      <div className="footerDiv">
        <p>
          ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <div className="linkDiv">
          <Link
            className="footerlinks"
            to="/about"
          >
            About
          </Link>
          <a className="footerlinks" href="https://github.com/jjiiaaLi/3045">
            GitHub
          </a>
          <a
            className="footerlinks"
            href="https://www.linkedin.com/in/jia-li-2829b140/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
}