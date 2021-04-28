import React from "react";
import "./app.css";
import logo from "./asserts/logo.png";
import award from "./asserts/1.png";
import photograph from "./asserts/2.png";
import utilities from "./asserts/3.png";

const App = () => {
  return (
    <div className="mainBody">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="headerContainer">
        <img src={award} />
        <div className="content">
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={photograph} />
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <h5>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h5>
      <img src={utilities} className="utilities" />
      <p className="bottomLine">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />
      <div className="labels">
        <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <p>
          CHEMICALS <span className="red">|</span> PROCESS POWER WATER{" "}
          <span className="red">|</span> WASTE WATER OILS{" "}
          <span className="red">|</span> GAS PHARMA SUGARS{" "}
          <span className="red">|</span> DISTILLERIES PAPER{" "}
          <span className="red">|</span> PULP MARINE{" "}
          <span className="red">|</span> DEFENCE METAL{" "}
          <span className="red">|</span> MINING FOOD{" "}
          <span className="red">|</span> BEVERAGE PETROCHEMICAL{" "}
          <span className="red">|</span> REFINERIES SOLAR BUILDING HVAC FIRE
          FIGHTING AGRICULTURE <span className="red">|</span> RESIDENTIAL
        </p>
      </div>
      <div className="footer">
        <div className="links">
          <i className="fas fa-phone-alt" style={{ color: "white" }}></i>
          <a href="#">
            Tollfree <b>1800 200 1234</b>
          </a>
        </div>
        <div className="links">
          <i className="fab fa-facebook" style={{ color: "white" }}></i>
          <a href="#">www.facebook.com/cripumps</a>
        </div>
        <div className="links">
          <i className="fas fa-globe" style={{ color: "white" }}></i>
          <a href="#">www.crigroup.com</a>
        </div>
      </div>
    </div>
  );
};

export default App;
