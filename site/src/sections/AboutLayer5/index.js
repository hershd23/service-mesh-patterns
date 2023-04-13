import React from "react";
import JoinL5io from "../../assets/images/aboutL5io/JoinLayer5.svg";
import Layer5logo from "../../assets/images/brand/SVG/Layer5.svg";
import Container from "../../components/Layout/Container";
import Button from "../../components/Button/index";
import AboutL5ioStyleWrapper from "./aboutl5io.style";



const aboutL5io = () => {
  return (
    <AboutL5ioStyleWrapper>
      <Container>

        <div className="outer-box">

          <div className="heading">
            <h1 className="about-title">About </h1>
            <img  className="layer5-img" src = {Layer5logo} alt = "Layer5"/>
          </div>
          <div className="layer5-info-1">
            <p className="para">
                    Layer5 helps organizations expect more from their infrastructure. We are enablers of the engineer and embrace developer-defined infrastructure.
            </p>
          </div>
          <div className="layer5-info-2">
            <p className="para">
                    Layer5's cloud native management software empowers developers to change how they write applications, support operators in rethinking how they run modern infrastructure, and enable product owners to regain full-control over their product portfolio.

            </p>
          </div>
          <div className="layer5-info-3">
            <p className="para">
                    Our shared commitment to the open source spirit push the Layer5 community and its projects forward. Maker of Meshery, the cloud native management plane. Creator of service mesh standards: <a href="https://smp-spec.io">Service Mesh Performance Specification</a> and <a href="https://smi-spec.io">Service Mesh Interface </a>.
            </p>
          </div>
          <div className="join-l5-community-div">
            {/* <button className="join-comm-btn"><img className="join-comm-btn-img" src={JoinL5io}></img></button> */}
            <Button
              className={"join-comm-btn"}
              icon = {JoinL5io}
              url = {"https://slack.layer5.io/"}

            />
            <p className="join-comm-para">and its open-source projects.</p>

          </div>

        </div>



      </Container>
    </AboutL5ioStyleWrapper>
  );
};

export default aboutL5io;