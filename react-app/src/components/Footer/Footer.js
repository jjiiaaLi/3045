import React from 'react'

import './Footer.css'


export default function Footer(){


    return (
      <div className="footerDiv">
        <p>
          ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <div className="linkDiv">
          <a
            className="footerlinks"
            href="https://github.com/jjiiaaLi/3045/blob/main/README.md"
          >
            About
          </a>
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