import React from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import logoText from "../../assets/images/icons/logo-text.svg";
import crown from "../../assets/images/icons/crown.svg";

function Navbar() {
  // const {name} = useParams();
  const params = new URLSearchParams(window.location.search)
  // console.log(window.location.search, params.get('name'), params.get('avatar'));
  const name = params.get('name');
  const avatar = params.get('avatar');

  // Now 'params' will contain the route parameters
  console.log("Navbar", name);
  return (
    <>
      <div className="bg-dark">
        <div className="container py-4 px-5">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              {/* <div className='logo'> */}
              <img src={logo} className="img-fluid" alt="" />
              {/* </div>
                <div className="logo-text"> */}
              <img src={logoText} className="img-fluid mx-3" alt="" />
              {/* </div> */}
              <div className="d-flex align-items-center">
                <div className="text-secondary h6 fw-bold mb-0 mx-3">
                  Plugins
                </div>
                <div className="text-secondary h6 fw-bold mb-0">Resources</div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="lang h6 fw-bold text-secondary mb-0">EN</div>
              <a className="h6 btn text-warning d-flex align-items-center premium-bg mb-0 mx-3">
                <img src={crown} className="img-fluid" alt="" />
                <span className="ms-2">Premium</span>
              </a>
              {name && avatar ? 
              <div className="d-flex">
                <img src={avatar} style={{
                  width: '25px',
                  height:'25px'
                }} alt="L" className="img-fluid rounded-5" />
                <div className="fw-bold text-light ms-2">{name}</div>
              </div>
            :  
            
              <a href={`${import.meta.env.VITE_BACKEND_URL}discord`} className="h6 btn btn-primary d-flex align-items-center mb-0">
                Login with Discord
              </a>
}
            </div>
          </div>
        </div>
      </div>
      {/* <Navigate to='/home'>Home</Navigate> */}
    </>
  );
}

export default Navbar;
