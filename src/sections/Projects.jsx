import { useState } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projectsData = [
  {
    title: "School Management Platform",
    description:
      "Developed a full-stack web application for international schools, featuring role-based user management, class scheduling, attendance and grade tracking, notifications, and real-time messaging. The project aimed to centralize school management processes and improve communication between administrators, teachers, parents, and students.",
    images: ["/projects/image1.png", "/projects/i.png"],
    tags: ["Laravel", "TypeScript", "MySQL"],
    link: "#",
    github: "https://github.com/settings/copilot/features",
  },
  {
    title: "E-commerce Site",
    description:
      "Built a full-featured e-commerce platform with Laravel that streamlines product catalog management, order processing, and secure online payments. The application was designed with a strong focus on security, performance, and usability, delivering a reliable and intuitive shopping experience for users.",
    images: ["/projects/image2.png", "/projects/image22.png"],
    tags: ["Laravel", "TypeScript", "MySQL"],
    link: "#",
    github: "https://github.com/settings/copilot/features",
  },
  {
    title: "Medical Platform",
    description:
      "This secure digital healthcare platform connects patients and healthcare professionals through a modern web application. It enables online appointment scheduling, teleconsultations, electronic medical records management, prescription management, and AI-assisted preliminary diagnosis to support clinical decision-making. The platform aims to improve healthcare accessibility, streamline medical workflows, and ensure the secure management of sensitive patient data.",
    images: ["/projects/im1.png", "/projects/im.png"],
    tags: ["Laravel", "php", "MySQL","Tailwind","CSS","OpenAI","API","Redis"],
    link: "#",
    github: "https://github.com/settings/copilot/features",
  },
  {
    title: "AI Job Recommender System — Generative AI Career Assistant",
    description:
      "AI Job Recommender System is an intelligent career assistant powered by Generative Artificial Intelligence that helps job seekers analyze their professional profile, identify skill gaps, and discover relevant career opportunities.The platform uses Large Language Models (LLMs) to understand a candidate’s resume, extract key information such as skills, education, and experience, then generate personalized career insights including a professional summary, skill improvement recommendations, learning roadmap, and matching job opportunities.The goal of this project is to simplify the job search process by providing candidates with an AI-powered assistant that not only recommends jobs but also guides them in improving their skills and career development.",
    image: "/projects/img12.png",
    tags: ["Python","Generative AI","Streamlit","Ollama","Streamlit","Apify API","Web Scraping Automation","REST APIs","Python-dotenv"],
    link: "#",
    github: "https://github.com/settings/copilot/features",
  },
];

export const Projects = () => {
  const [activeImage, setActiveImage] = useState({});

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* IMAGE */}
              <div
                className="relative overflow-hidden aspect-video"
                onMouseEnter={() => {
                  if (project.images && project.images.length > 1) {
                    setActiveImage((prev) => ({
                      ...prev,
                      [idx]: 1, // switch to second image
                    }));
                  }
                }}
                onMouseLeave={() => {
                  setActiveImage((prev) => ({
                    ...prev,
                    [idx]: 0, // back to first image
                  }));
                }}
              >
                <img
                  src={
                    project.images
                      ? project.images[activeImage[idx] ?? 0]
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-color">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*view all cta*/}
       
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="/projects">
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};