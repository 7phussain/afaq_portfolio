import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import "react-awesome-slider/dist/styles.css";
import "../StylingSheets/serviceDetail.css";
import routes from "routes";
import MKBox from "./MKBox";
import footerRoutes from "footer.routes";
import DefaultNavbar from "../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../examples/Footers/DefaultFooter";
import { serviceData } from "../components/ServiceData";
const ServiceDetail = () => {
  let { name } = useParams();
  return (
    <div className="serviceDetailContainer">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https:/",
          label: "free download",
          color: "default",
        }}
      />

      {serviceData.map((data, id) => {
        return (
          data.title == name && (
            <div key={id}>
              <AwesomeSlider className="slider" animation="cubeAnimtion">
                {data.pics.map((data, id) => {
                  return (
                    <div className="item" key={id}>
                      <img className="img2" src={data} alt="" />
                    </div>
                  );
                })}
              </AwesomeSlider>
              <div className="discContaineroutside">
                <div className="discContainer">
                  <h1 className="title2">{data.name}</h1>
                  <pre className="dics">{data.dis}</pre>
                </div>
              </div>
            </div>
          )
        );
      })}

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
};

export default ServiceDetail;
