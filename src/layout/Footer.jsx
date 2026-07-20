import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="glass-strong border-t border-primary/20 mt-24">
      <div className="container mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + Copyright */}
          <div className="text-center md:text-left">

            <a
              href="#"
              className="
                text-xl
                font-bold 
                tracking-tight 
                text-white 
                hover:text-primary 
                transition-colors 
                duration-300
              "
            >
              MA<span className="text-white">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-3">
              © {new Date().getFullYear()} Manai Aymen. All rights reserved.
            </p>

          </div>


          {/* Navigation */}
          <nav
            className="
              flex 
              flex-wrap 
              justify-center 
              items-center 
              gap-6 
              text-sm 
              text-muted-foreground
            "
          >

            {[
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Experience", href: "#experience" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="
                  relative
                  hover:text-primary
                  transition-colors
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-primary
                  hover:after:w-full
                  after:transition-all
                  after:duration-300
                "
              >
                {item.name}
              </a>
            ))}

          </nav>


          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/TON_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-10
                h-10
                rounded-full
                border
                border-border
                bg-card
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:bg-primary
                hover:text-white
                hover:border-primary
                hover:shadow-[0_0_20px_rgba(32,178,166,0.5)]
              "
            >
              <FaGithub
                size={18}
                className="transition-colors duration-300"
              />
            </a>


            <a
              href="https://linkedin.com/in/TON_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-10
                h-10
                rounded-full
                border
                border-border
                bg-card
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:bg-primary
                hover:text-white
                hover:border-primary
                hover:shadow-[0_0_20px_rgba(32,178,166,0.5)]
              "
            >
              <FaLinkedin
                size={18}
                className="transition-colors duration-300"
              />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};