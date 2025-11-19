"use client";

import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Regional Revenue Analysis",
      description: "Exploration of public dataset on French regional revenues with Seaborn.",
      techStack: ["Python", "Pandas", "Seaborn"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "PS5 Price Analysis",
      description: "Web scraping of LeBonCoin PS5 prices, visualized with Seaborn.",
      techStack: ["Python", "BeautifulSoup", "Pandas", "Seaborn"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "E-commerce Data Analysis",
      description: "Analysis of 3M+ orders and 200k users, dashboards built with Power BI.",
      techStack: ["Python", "SQL", "Power BI"],
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
