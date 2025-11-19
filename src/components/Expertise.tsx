import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS",
  "Node.js",
  "Express.js",
  "Docker",
  "Ruby on Rails",
  "SQL",
  "PostgreSQL",
  "Firebase",
  "Postman",
  "Jest",
  "Playwright",
  "Unit Testing",
  "Robot Framework",
  
];

const labelsSecond = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS",
  "Storybook",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Professional Experience</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <li>Developed and maintained high-quality products with a focus on performance.</li>
            <li>
             Designed, implemented, and tested software solutions to meet business and user requirements.
            </li>
            <li>Collaborated effectively within Agile teams.</li>
            <li>
                Fixed bugs, optimized features, and delivered regular updates to keep the system stable and efficient.
            </li>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAngular} size="3x" />
            <h3>Frontend Developer</h3>
            <li>Developed and maintained the organization’s Design System.</li>
            <li>
              Built a reusable UI Component Library with Angular + Storybook,
              defining standards for props, styles, and accessibility.
            </li>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
