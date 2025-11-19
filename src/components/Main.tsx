import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/myself.png";
import avatar2 from "../assets/images/myself2.png";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            style={{
              transform: "rotate(-20deg)",
              backgroundColor: "rgba(255, 255, 255, 0.72)",
              border: "solid 1px rgba(0, 0, 0, 1)",
            }}
            src={avatar2}
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/kritin1124"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/%E0%B8%81%E0%B8%A4%E0%B8%95%E0%B8%B4%E0%B8%99-%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%9E%E0%B8%A5%E0%B8%B5%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93-51907734b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Kritin Panpleewan</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/kritin1124"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/%E0%B8%81%E0%B8%A4%E0%B8%95%E0%B8%B4%E0%B8%99-%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%9E%E0%B8%A5%E0%B8%B5%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93-51907734b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
