import React from "react";
import "./Footer.css";
// Importation des icônes spécifiques
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/Muhozalevy" target="_blank" rel="noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
        
        <a href="www.linkedin.com/in/levy-michel-muhoza-6b947038a" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>

        <a href="mailto:muhozalewis928@gmail.com">
          <HiOutlineMail className="icon" /> Email
        </a>
      </div>
      
      <p>&copy; {new Date().getFullYear()} Lévy Michel. Tous droits réservés.</p>
    </footer>
  );
}