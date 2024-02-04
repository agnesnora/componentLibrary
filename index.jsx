import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Badge from "./components/Badge/badge";
import Banner from "./components/Banner/banner";
import Card from "./components/Card/card";
import PopUp from "./components/PopUp/PopUp";
import Testimonial from "./components/Testimonial/testimonial";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { data } from "./data";
import imageUrl from "/Workcation_logo.png";
import "./styles/App/AppStyles.css";

function App() {
  return (
    <>
      <div className="main-title">
        <h1>Component library ++</h1>
        <h4 className="main-title-sub">Reusable components built with React</h4>
      </div>

      <div className="component--container">
        <h3 className="title">Badge component</h3>
        <div className="badge-container">
          {" "}
          <h2 className="subtitle">Square</h2>
          <div className="badge-display">
            {data.colorArray.map((color) => (
              <Badge color={color} variant="square">
                Badge
              </Badge>
            ))}
          </div>
          <h2 className="subtitle">Pill</h2>
          <div className="badge-display">
            {data.colorArray.map((color) => (
              <Badge color={color} variant="pill">
                {color}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <>
        <div className="component--container">
          {" "}
          <h2 className="title">Banner component</h2>
          <div className="banner-display">
            <div className="banner-container">
              <h2 className="subtitle">Long text</h2>
              {data.themeArray.map((theme) => (
                <Banner
                  theme={theme}
                  variant="titleWithText"
                  className="banner"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </Banner>
              ))}{" "}
            </div>

            <div className="banner-container">
              <h2 className="subtitle">Short text</h2>
              {data.themeArray.map((theme) => (
                <Banner theme={theme} variant="titleOnly" className="banner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </Banner>
              ))}
            </div>
          </div>
        </div>
      </>
      <></>
      <div className="component--container">
        {" "}
        <h2 className="title">Card component</h2>
        <div className="card-display">
          <Card
            icon={
              <div
                className="card--icon"
                style={{
                  backgroundColor: "#bfd7ea",
                  color: "#fff",
                }}
              >
                <HiOutlineCloudUpload />
              </div>
            }
          >
            <div className="card--content">
              <h1>Easy Deployment</h1>
              <p>
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis
              </p>
            </div>
          </Card>
          <Card>
            <div className="card--content">
              <h1>Easy Deployment</h1>
              <p>
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis
              </p>
            </div>
          </Card>
        </div>
      </div>
      <>
        <div>{/* <PopUp /> */}</div>
      </>
      <></>
      <>
        <div className="component--container">
          <h2 className="title">Testimonial component</h2>
          <Testimonial
            text="Workcation, CTO"
            src={imageUrl}
            person="May Andersons"
          >
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </Testimonial>
        </div>
      </>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
