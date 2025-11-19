import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/kritin1124" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/%E0%B8%81%E0%B8%A4%E0%B8%95%E0%B8%B4%E0%B8%99-%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%9E%E0%B8%A5%E0%B8%B5%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93-51907734b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;