import React, { useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import logoText from "../../assets/images/icons/logo-text.svg";
import crown from "../../assets/images/icons/crown.svg";
import hamburger from "../../assets/images/icons/hamburger.svg";
import { CloseOutlined } from "@ant-design/icons";

function Navbar() {
  // const {name} = useParams();
  const params = new URLSearchParams(window.location.search);
  // console.log(window.location.search, params.get('name'), params.get('avatar'));
  const name = params.get("name");
  const avatar = params.get("avatar");
  localStorage.setItem("name", name);
  localStorage.setItem("avatar", avatar);

  function openDiscordLink(url) {
    return window.open(url, "_blank", "width=500,height=700");
  }
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  // Now 'params' will contain the route parameters
  console.log("Navbar", name);
  return (
    <>
      <div className="bg-dark">
        <div className={`navbar-mobile ${navbarVisible ? "visible" : ""}`}>
          <div className="container py-4 px-5">
            <div className="d-block">
              <div className="d-block">
                <div className="d-flex justify-content-between align-items-center">
                  {/* <div className='logo'> */}
                  <div>
                    <img src={logo} className="img-fluid" alt="" />
                    {/* </div>
                <div className="logo-text"> */}
                    <img src={logoText} className="img-fluid mx-3" alt="" />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="lang px-3 fw-bold text-secondary">EN</div>
                    <button
                      className="btn btn-primary text-white p-0 pb-1 px-2"
                      onClick={toggleNavbar}
                    >
                      <CloseOutlined />
                      {/* v */}
                    </button>
                  </div>
                </div>

                {/* </div> */}
                <div className="d-flex flex-column mt-4">
                  <div className="text-secondary h6 fw-bold pb-3">Plugins</div>
                  <div className="text-secondary h6 fw-bold pb-3">
                    Resources
                  </div>
                  <a className="h6 btn text-warning d-flex align-items-center premium-bg">
                    <img src={crown} className="img-fluid" alt="" />
                    <span className="ms-2">Premium</span>
                  </a>
                </div>
              </div>

              <div className="p-absolute start-0 end-0">
                <div className="px-4">
                  {name && avatar ? (
                    <div>
                      <img
                        src={avatar}
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                        alt="L"
                        className="img-fluid rounded-5"
                      />
                      <div className="fw-bold text-light ms-2">{name}</div>
                    </div>
                  ) : (
                    <button
                      onClick={() =>
                        openDiscordLink(
                          `${import.meta.env.VITE_BACKEND_URL}discord`
                        )
                      }
                      style={{
                        width: "100%",
                      }}
                      // href={`${import.meta.env.VITE_BACKEND_URL}discord`}
                      className="h6 btn btn-primary mb-0"
                    >
                      Login with Discord
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4 px-5 ">
          <div className="logo-plugins">
            <div className="logo-plugins">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <img src={logo} className="img-fluid" alt="" />
                  <img src={logoText} className="img-fluid mx-3" alt="" />
                </div>

                <div
                  className={`sm-visible ${navbarVisible ? "invisible" : ""}`}
                  onClick={toggleNavbar}
                >
                  <img src={hamburger} alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center pc-nav">
                <div className="text-secondary h6 fw-bold mb-0 mx-3">
                  Plugins
                </div>
                <div className="text-secondary h6 fw-bold mb-0">Resources</div>
              </div>
            </div>
            <div className="d-flex align-items-center pc-nav">
              <div className="lang h6 fw-bold text-secondary mb-0">EN</div>

              <a className="h6 btn text-warning d-flex align-items-center premium-bg mb-0 mx-3">
                <img src={crown} className="img-fluid" alt="" />
                <span className="ms-2">Premium</span>
              </a>
              {name && avatar ? (
                <div className="d-flex">
                  <img
                    src={avatar}
                    style={{
                      width: "25px",
                      height: "25px",
                    }}
                    alt="L"
                    className="img-fluid rounded-5"
                  />
                  <div className="fw-bold text-light ms-2">{name}</div>
                </div>
              ) : (
                <button
                  onClick={() =>
                    openDiscordLink(
                      `${import.meta.env.VITE_BACKEND_URL}discord`
                    )
                  }
                  // href={`${import.meta.env.VITE_BACKEND_URL}discord`}
                  className="h6 btn btn-primary mb-0"
                >
                  Login with Discord
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="d-flex flex-column position-fixed top-0 bottom-0 start-0 end-0 bg-dark">
        <div className="d-flex justify-content-between">
          <div>
            <img src={logo} className="img-fluid" alt="" />

            <img src={logoText} className="img-fluid mx-3" alt="" />
          </div>
          <div>
            <div className="d-flex">
              <img
                src={avatar}
                style={{
                  width: "25px",
                  height: "25px",
                }}
                alt="L"
                className="img-fluid rounded-5"
              />
              <div className="fw-bold text-light ms-2">{name}</div>
            </div>
          </div>
        </div>
        <div className="text-secondary h6 fw-bold mb-0 mx-3">Plugins</div>
        <div className="text-secondary h6 fw-bold mb-0">Resources</div>
      <div className="lang h6 fw-bold text-secondary mb-0">EN</div>
      <a
        href={`${import.meta.env.VITE_BACKEND_URL}discord`}
        className="h6 btn btn-primary d-flex align-items-center mb-0"
      >
        Login with Discord
      </a>
      </div> */}

      {/* <Navigate to='/home'>Home</Navigate> */}
    </>
  );
}

export default Navbar;
