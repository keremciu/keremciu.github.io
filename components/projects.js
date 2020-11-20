const projectList = [
  {
    url: "https://github.com/keremciu/sketch-iconfont",
    stargazers_count: 2000,
    name: "sketch-icon-font",
    description:
      "This plugin helps you easily insert and manage icons from icon fonts.",
    full_name: "",
  },
  {
    url: "https://github.com/keremciu/fifa-tournament-generator",
    name: "fifa-tournament-generator",
    language: "Python",
    description:
      "Web application to create and share fifa tournaments with your friends.",
  },
  {
    url: "https://github.com/keremciu/font-bundles",
    name: "font-bundles",
    description: "Main font-bundle for sketch icon-font plugin.",
  },
  {
    url: "https://github.com/keremciu/sketch-repeat",
    name: "sketch-repeat",
    description:
      "This plugin helps you easily duplicate your objects to all Artboards.",
  },
  {
    url: "https://github.com/hypeserver/ne-kadar-verdin",
    name: "ne-kadar-verdin",
    full_name: "hypeserver/ne-kadar-verdin",
    description:
      "Web application to calculate taxes you have given to Turkish state between 2009-2019.",
  },
  {
    url: "https://github.com/keremciu/house-of-decks",
    name: "house-of-decks",
    description:
      "This is an online party game where you can enjoy dark sense of humor.",
  },
];

export default function Projects() {
  return (
    <div className="grid" data-style="secondary">
      {projectList.map((project) => (
        <a
          href={project.url}
          className="card"
          key={project.name}
          rel="license noopener noreferrer"
          target="_blank"
        >
          <span className="label">
            {project.language ? project.language.toUpperCase() : "JAVASCRIPT"}
          </span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </a>
      ))}
      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 3rem;
            margin-bottom: 3rem;
          }

          .card {
            background: var(--secondary-bg-color);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
            border-radius: 16px 4px 4px 4px;
            margin-right: 2%;
            margin-bottom: 4%;
            flex-basis: 31%;
            padding: 1.3rem 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            transition: all 0.2s ease-in;
            background-image: linear-gradient(
              transparent 0px,
              var(--yellow-color) 0px
            );
            background-position: 0 150px;
            background-repeat: no-repeat;
          }

          .card h3 {
            color: var(--heading-color);
            margin: 8px 0 0;
          }

          .card p {
            margin: 8px 0 0;
            font-size: 12px;
          }

          .card:hover,
          .card:focus,
          .card:active {
            transform: translateY(2px);
            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
            background-position: 0px 144px;
          }

          @media (max-width: 1024px) {
            .grid {
              margin-left: 2%;
            }
            .card {
              flex-basis: 48%;
            }
          }

          @media (max-width: 600px) {
            .grid {
              width: 90%;
              flex-direction: column;
              margin-left: 5%;
            }
            .card {
              min-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}