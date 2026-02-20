import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = ["HTML5 / CSS3", "JavaScript ES6+", "React (Hooks, Router)", "Responsive Design", "Git & GitHub",'Figma','Tailwind'];
  
  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}
