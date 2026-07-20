const experiences = [
    {
        period: "06-02-2025 / 26-05-2025",
        role: "Web Developer Intern",
        company: "Myndes team",
        description:"Conception et développement complet d’une plateforme web dynamique de gestion scolaire destinée aux établissements internationaux.Fonctionnalités clés :Gestion des utilisateurs avec rôles distincts : administrateur, enseignant,parent, élèveSuivi scolaire : gestion des classes, des emplois du temps, des absences, desnotes et des notifications ,Système de messagerie interne chat en temps réel pour faciliter la communication entre les différents acteurs Interface conviviale et sécurisé",
        technologies: ["laravel","TypeScript","php","html","css","Tailwind"],
        current: true,
    },
    {
        period: "11-01-2024/02-02-2024",
        role: "Web Developer Intern",
        company: "Tunisian Company of Electricity and Gas",
        description:"Internal web platform developed to digitalize internship management processes.It facilitates document submission, application tracking, and digital archiving while improving communication between interns and company supervisors.",
        technologies: ["Angular","Spring Boot",],
        current: true,
    },
    {
        period: "09-01-2023/04-02-2023",
        role: "IT Intern",
        company: "TUNISIE TELECOM",
        description:"Introduction to database administration and system management through hands-on practice with Linux environments, virtual machines, and SQL queries.Developed skills in database analysis, technical troubleshooting, and understanding enterprise IT operations.",
        technologies: ["Linux","sql"],
        current: true,
    },
    {
        period: "01-07-2026/31-07-2026",
        role: "Engineering Intern",
        company: "Karriery",
        description:"Developed an AI-powered job recommendation platform at Karriery, a career-focused startup. The system leverages Generative AI and NLP techniques to analyze resumes, extract candidate skills, identify skill gaps, generate personalized learning roadmaps, and recommend relevant job opportunities. Built using Python, Streamlit, LLM models (Ollama/OpenAI), PyMuPDF, and Apify APIs to provide intelligent career guidance and improve the job search experience.",
        technologies: ["Python","Generative AI","Streamlit","Ollama","Streamlit","Apify API","Web Scraping Automation","REST APIs","Python-dotenv"],
        current: true,
    },
]





export const Experience = () => {

    return (
        <section 
        id="experience"
        className="py-32 relative overflow-hidden"
    >
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
            {/* section header*/}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
                >
                Experience that{" "}
                <span className="font-serif italic font-normal text-white">
                {" "}
                speaks volumes.
                </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    This section highlights my experience as a web and mobile developer . I have had the opportunity to collaborate with companies and teams to digitalize complex processes, work with modern architectures (Angular, Spring Boot), and optimize data management . Each project represents a technical challenge met with rigor and passion .
                </p>
            </div>
            {/*timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                {/*experience items*/}
                <div className="space-y-12">
                    {experiences.map((exp, idx)=>(
                        <div key={idx} 
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>

                            {/*timeline dot*/}
                           <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                           {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                           
                           </div>
                           {/*content*/}
                           <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                            <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>{exp.technologies.map((tech, techIdx)=> (
                                    <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                ))}
                                </div>
                            </div>
                            </div>

                        </div>
                    ))}

                </div>



            </div>

        </div>

        

    </section>
    );
};