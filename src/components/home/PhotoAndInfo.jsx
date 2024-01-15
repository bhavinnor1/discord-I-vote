import React from "react";
import AddToDiscord from "../common/AddToDiscord";
import SeeFeatures from "../common/SeeFeatures";

function PhotoAndInfo({ heading, para, img, first }) {
  return (
    <div className="bg-dark text-light pb-3">
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-6 pt-5" style={{
            order: first === "text" ? 2 : 1
          }}>
            <img src={img} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6 d-flex justify-content-center flex-column"
          style={{
            order: first === "text" ? 1 : 2
          }}>
            <div className="h1">{heading}</div>
            <div className="text-secondary mt-4 mb-5">
              {para}
            </div>
            <div>
              <AddToDiscord />
              <span className="ms-4">
                <SeeFeatures text="Learn More" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoAndInfo;
