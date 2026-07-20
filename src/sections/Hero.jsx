import {Button} from '@/components/Button';
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ChevronDown } from "lucide-react";
const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "MySql",
];
export const Hero = () => {
    return (
     <section className="relative min-h-screen flex items-center overflow-hidden">
    {/*Bg */}
    <div className="absolute inset-0">
        <img 
        src="projects/hero-bg.jpg" 
        alt="Hero image"
        className="w-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
        </div>
        
    </div>
    {/*Green dots */ }
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) =>(
            <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
                background: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation:`slow-drift ${
                    15 + Math.random() * 20
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s `
            }}
            />
        ))}
    </div>
    {/*Content*/}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
       <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/*Left column -Text Content */}
        <div className="space-y-8">
            <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                 Full Stack Web Developer . Laravel specialist
                </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                <span className='text-white'>Building</span> <span className="text-primary glow-text">Digital Solutions</span>
                <br />
                 <span className='text-white'>with</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                    Purpose and Precision
                </span>
            </h1>  
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Aymen Manai.
                A passionate Full Stack Developer focused on building modern web applications using Java, Spring Boot, Angular, React, Laravel, and MySQL. I enjoy turning complex challenges into innovative, scalable, and user-friendly digital solutions while constantly exploring new technologies and best development practices.
            </p>
            </div>
            {/*ctas*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button size="lg" href="#contact">
                    Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton href="/cv.pdf">
                    Download CV
                </AnimatedBorderButton>
               </div>
               {/*social links */}
              <div>
               
                 
               </div>

        </div>
        {/*right Column - profile image*/}
        <div className="relative animate-fade-in animation-delay-300">
            {/* profile image*/}
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                <div className="relative glass rounded-3xl p-2 glow-border">
                    <img  src="projects/profile-photo.png" alt="Manai Aymen" className="w-full aspect-[3.65/5] object-cover rounded-2xl" />
                    {/*Floating Badge*/}
                    <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-white">Available for work</span>
                        </div>
                    </div>
                    {/* stats badge*/}
                    <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                        <div className="text-2xl font-bold text-primary">1+</div>
                        <div className="text-xs text-muted-foreground">Years Exp.</div>
                    </div>

                </div>
            </div>
            
        </div>
        </div>
        {/*Skills section*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center ">Technologies I work with</p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx) =>(
                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>

    </div>
    {/*scroll*/}
   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
  <button
    onClick={() =>
      document.getElementById("skills-section")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition"
  >
    <span className="text-xs tracking-widest uppercase">Scroll</span>
    <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
  </button>
</div>
   


    </section>
);
};