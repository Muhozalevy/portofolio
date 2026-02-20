import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Gestionnaire de Contacts",
      description: "Application CRUD avec gestion d'état complexe (useState) et immuabilité.",
      tech: ["React", "CSS Modules", "Lucide Icons"],
      demoLink: "https://Muhozalevy.github.io/contact-manager/",
      repoLink: "https://github.com/Muhozalevy/contact-manager"
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "Convertisseur de devises utilisant une API externe et le hook useEffect.",
      tech: ["React", "Fetch API", "ExchangeRate API"],
      demoLink: "https://Muhozalevy.github.io/currency-converter/",
      repoLink: "https://github.com/Muhozalevy/ConverterCurrency"
    },
    {
      id: 3,
      title: "Todo List",
      description: "Gestion de tâches avec filtrage dynamique et persistance locale.",
      tech: ["React", "Vite", "Local Storage"],
      demoLink: "https://Muhozalevy.github.io/todoList/",
      repoLink: "https://github.com/Muhozalevy/todoList"
    }
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects project={projects} />
      <Contact />
      <Footer />
    </>
  );
}