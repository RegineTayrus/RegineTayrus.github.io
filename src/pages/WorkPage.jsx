import { Link } from "react-router-dom";
import libraryImage from "../../images/library.png";
import projectsImage from "../../images/picture.png";
import portrait from "../../images/regine.png";
import scoreImage from "../../images/st.png";

const projects = [
  {
    image: projectsImage,
    imageAlt: "GitHub Projects",
    title: "GitHub Projects",
    description:
      "A GitHub profile showcasing my projects, programming skills, web development, UI design, and other technology-related work.",
    url: "https://github.com/RegineTayrus",
    linkText: "VIEW GITHUB →",
  },
  {
    image: libraryImage,
    imageAlt: "Digital Library Management System",
    title: "Digital Library Management System",
    description:
      "A user-friendly digital library system that allows users to organize, categorize, and manage books and learning materials in one place.",
    url: "/work",
    linkText: "VIEW PROJECT →",
  },
  {
    image: scoreImage,
    imageAlt: "Student Score Tracker",
    title: "Student Score Tracker",
    description:
      "A user-friendly application that helps students record, organize, and monitor academic scores while automatically calculating average grades.",
    url: "/work",
    linkText: "VIEW PROJECT →",
  },
];

export default function WorkPage() {
  return (
    <main>
      <section id="work">
        <div className="work-left">
          <span className="title">My Work</span>
          <h2>
            Projects That <br />
            <span className="script">Make an Impact</span>
          </h2>
          <p>
            Here are some of the websites I&apos;ve designed and developed.
            Each project reflects my passion for clean design, functionality
            and meaningful user experiences.
          </p>

          <div className="projects">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <img src={project.image} alt={project.imageAlt} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.url.startsWith("https://") ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkText}
                  </a>
                ) : (
                  <Link to={project.url}>{project.linkText}</Link>
                )}
              </article>
            ))}
          </div>

          <Link to="/contact" className="btn">
            LET&apos;S WORK TOGETHER →
          </Link>
        </div>

        <div className="work-right">
          <img src={portrait} alt="Regine Tayrus" />
        </div>
      </section>
    </main>
  );
}
