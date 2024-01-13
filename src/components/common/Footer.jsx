import React from "react";
import logo from "../../assets/images/icons/logo.svg";

function Footer() {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <div className="d-flex flex-column align-items-between">
              <div>
                <img src={logo} className="img-fluid" alt="" />
                <div className="text-secondary mt-3">
                  The best Discord bot to bootstrap and grow your Discord server
                </div>
              </div>
              <div>
                <div className="text-secondary">EN</div>
                <div className="text-secondary">
                  Copyright © 2018 - 2024 BVN INc.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-2">
            <div className="mb-3">Plugins</div>
            <div className="text-secondary mb-1">Server management</div>
            <div className="text-secondary mb-1">Utilities</div>
            <div className="text-secondary mb-1">Social Alerts</div>
            <div className="text-secondary mb-1">Engagement & Fun</div>
          </div>
          <div className="col-md-2">
            <div className="mb-3">MEE6</div>
            <div className="text-secondary mb-1">Premium</div>
            <div className="text-secondary mb-1">Bot Personalizer</div>
            <div className="text-secondary mb-1">Support Server</div>
            <div className="text-secondary mb-1">Support Portal</div>
            <div className="text-secondary mb-1">Support Contact</div>
          </div>
          <div className="col-md-2">
            <div className="mb-3">Company</div>
            <div className="text-secondary mb-1">
              Careers <span className="badge bg-primary">HIRING</span>
            </div>
            <div className="text-secondary mb-1">Terms of use</div>
            <div className="text-secondary mb-1">Privacy Policy</div>
            <div className="text-secondary mb-1">Bug bounty program</div>
            <div className="text-secondary mb-1">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
