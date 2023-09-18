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

function App() {
  return (
    <>
      <div>
        <h1 className="title">Component library ++</h1>
        <h2 className="title">Badges</h2>
        <div className="badge-display">
          <h2 className="subtitle">Square</h2>
          {data.colorArray.map((color) => (
            <Badge color={color} variant="square">
              Badge
            </Badge>
          ))}
        </div>
        <div className="badge-display">
          <h2 className="subtitle">Pill</h2>
          {data.colorArray.map((color) => (
            <Badge color={color} variant="pill">
              Badge
            </Badge>
          ))}
        </div>
      </div>
      <>
        <h2 className="title">Banners</h2>
        <div className="banner-display">
          <div>
            {data.themeArray.map((theme) => (
              <Banner theme={theme} variant="titleWithText" className="banner">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
              </Banner>
            ))}{" "}
          </div>
          <div>
            {data.themeArray.map((theme) => (
              <Banner theme={theme} variant="titleOnly" className="banner">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
              </Banner>
            ))}
          </div>
        </div>
      </>
      <>
        <h2 className="title">Cards</h2>
      </>
      <div className="card-display">
        <Card
          icon={
            <div
              className="card--icon"
              style={{
                backgroundColor: "#3F75FE",
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
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis
            </p>
          </div>
        </Card>
        <Card>
          <div className="card--content">
            <h1>Easy Deployment</h1>
            <p>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis
            </p>
          </div>
        </Card>
      </div>
      <>
        <div>{/* <PopUp /> */}</div>
      </>
      <>
        <h2 className="title">Testimonial</h2>
      </>
      <>
        <div>
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
