import "./Project.css";

// J'ai renommé la prop "project" en "projects" (avec un s) pour plus de clarté
export default function Projects({ project }) {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      
      <div className="projects-grid">
        {project.map((item) => (
          <div key={item.id} className="project-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="project-links">
              <a 
                href={item.repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Voir Code Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}