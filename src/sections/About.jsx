import { Code2, Lightbulb, Rocket, User, Puzzle, Handshake  } from "lucide-react";

const highlights = [
    {
       icon: Code2,
       title:"Full-Stack Development",
       description:"Crafting secure, scalable, and user-friendly web applications with modern technologies and clean architecture.",

    },
    {
        icon: Lightbulb,
        title:"Innovation",
       description:"Turning ideas into practical digital solutions by combining creativity with modern software development.",
    },
    {
        icon: Puzzle,
       title:"Problem Solving",
       description:"Analyzing complex challenges and building efficient applications that create real value for users.",
    },
    {
        icon: Handshake,
       title:"Collaboration",
       description:"Believing that the best software is built through teamwork, clear communication, and continuous improvement.",
    },

];



export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*left colomn*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            one component at a time.
                        </span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I am a first-year Computer Engineering student with a Bachelor's degree in Information Technology. Passionate about software development and emerging technologies, I enjoy designing innovative solutions that address real-world challenges. Curious, motivated, and eager to learn, I continuously strive to expand my technical knowledge and take on new challenges.
                        </p>
                        <p>
                            Through my internships and academic projects, I have gained hands-on experience in developing full-stack web applications using technologies such as Angular, Spring Boot, Laravel, React, Java, Python, and MySQL. These experiences have strengthened my expertise in both front-end and back-end development, database design, and collaborative software engineering while following industry best practices.
                        </p>
                        <p>
                            Beyond my technical skills, I am a dedicated, adaptable, and team-oriented individual with strong communication and problem-solving abilities. My involvement in student organizations and community initiatives has helped me develop leadership, project management, and interpersonal skills. My goal is to grow as a software engineer, contribute to impactful projects, and build innovative digital solutions that deliver meaningful value to users.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to create innovative and scalable digital solutions that combine modern technologies, clean code, and intuitive user experiences. I am committed to building applications that solve real-world challenges while continuously improving my skills as a software engineer."
                        </p>
                    </div>
                </div>
                {/* Right Column -Hilights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) =>(
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style = {{animationDelay: `${(idx + 1) * 100}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};