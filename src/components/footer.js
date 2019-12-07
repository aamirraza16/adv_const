import React from 'react';
import { Link } from 'react-router-dom';

function FooterComponent(props) {
  return (
       <footer >
         {props.children}
      <div className="container-fluid">
        <div className='container' >
        <div className="row">
          <div className="col-md-8 p-3">
              <ul className="nav mr-auto pb-3 w-50 border-bottom">
                <li className="nav-item"><a href="#" className="nav-link icoFacebook social-icon" title="Facebook"><img src="/fb.png" /></a></li>
                <li className="nav-item"><a href="#" className="nav-link icoLinkedin social-icon" title="Linkedin"><img src="/linked.png" /></a></li>
                <li className="nav-item"><a href="#" className="nav-link icoLinkedin social-icon" title="Instagram"><img src="/instagram.png" /></a></li>
              </ul>
              <ul className="nav pt-3">
              <li className="nav-item">
               <Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/who-we-are">Who We Are</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/quality">Quality</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/work-at-acc">Work At Acc</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>

          </div>
          <div className="col-md-4 p-3">
            <Link className="float-right mt-md-2" to="/">
              <img src="/logo.png" className="img-fluid" style={{width:'280px' , height:'110px'}}/>
            </Link>
            
          </div>
        </div>
        </div>
        <hr/>
        <div className="row ">
          <div className="col-md-5 ml-auto">
            <p className="copyRight">&copy; 1996-2020 Advance Construction Co. <span>All right Reserved</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterComponent;
