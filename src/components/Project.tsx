import React from "react";

import su1 from "../assets/images/su1.png";
import venio from "../assets/images/venio.png";
import tempify1 from "../assets/images/tempify1.png";
import tempify2 from "../assets/images/tempify2.png";
import empeo from "../assets/images/empeo.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Experienced Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img src={su1} className="zoom" alt="thumbnail" width="100%" />
          <h2>SU Smart web admin</h2>
          <p>
            University Internal Platform for Staff and Faculty Members to
            Facilitate Access to Information, News, and Various Services.
          </p>
        </div>
        <div className="project">
          <img src={tempify2} className="zoom" alt="thumbnail" width="100%" />

          <h2>Tempify OJ Web-admin</h2>
          <p>
            Designed, developed, and launched a 3D multiplayer racing game with
            C# and Unity. This is available on Itch.io for gamers worldwide to
            enjoy.
          </p>
        </div>
        <div className="project">
          <img src={empeo} className="zoom" alt="thumbnail" width="100%" />

          <h2>Empeo</h2>
          <p>
            Has an all-in-one Human Resource Management (HRM) and Payroll
            platform designed to help businesses.
          </p>
        </div>
        <div className="project">
          <img src={venio} className="zoom" alt="thumbnail" width="100%" />

          <h2>Venio</h2>
          <p>
            A practical and user-friendly Sales CRM platform designed to help
            B2B businesses manage sales pipelines, improve customer
            relationships, and boost long-term revenue growth.
          </p>
        </div>
        {/* <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={venio} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>WeManage: Real Estate Asset Management</h2>
          </a>
          <p>
            This mobile application allows realtors in Japan to securely manage
            their property information and view future income predictions. This
            app is built with Ruby on Rails and JavaScript.
          </p>
        </div> */}
        {/* <div className="project">
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <h2>COVID-19 Case Management</h2>
          </a>
          <p>
            Built official charts for COVID/vaccination tracking for an
            educational institution using JavaScript and the Google Sheets API
            v4. The dashboard served the university's leadership in their
            decision-making processes.
          </p>
        </div> */}
        {/* <div className="project">
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Multiple Regression Property Analysis</h2>
          </a>
          <p>
            Analyzed the real estate market in Japan and predicted property
            prices by implementing statistical methods such as OLS and
            multi-regression analysis. This project leveraged Python and various
            libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.
          </p>
        </div>
        <div className="project">
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Programs of Study</h2>
          </a>
          <p>
            Designed and developed a custom component for a CMS-based platform
            (e.g., 'Brightspot') using Java, Handlebars, and LESS. University
            students can find their majors of interest through this module.
          </p>
        </div>
        <div className="project">
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Transfer Evaluation Matrix</h2>
          </a>
          <p>
            Created an interactive CSV table generator with Java, Handlebars,
            and LESS. This project helps transfer students to quickly identify
            eligible credits.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Submeowrine</h2>
          </a>
          <p>
            Developed and released an Android mobile application using Java and
            Android Studio that runs a 2D shooting game.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
