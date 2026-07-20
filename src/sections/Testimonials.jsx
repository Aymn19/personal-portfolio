import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const testimonials = [
  {
    quote:
      "Aymen is one of the most talented engineers I've worked with. His skills and dedication are impressive.",
    author: "Achref Manai",
    role: "CTO, Tech Innovators Inc.",
    avatar: "/projects/av.jpg",
  },
  {
    quote:
      "Excellent developer with outstanding communication skills and great problem solving abilities.",
    author: "Mohamed Ali",
    role: "Senior Developer",
    avatar: "/projects/av.jpg",
  },
  {
    quote:
      "Creative, professional and passionate about building modern applications.",
    author: "Ahmed Ben Salah",
    role: "Project Manager",
    avatar: "/projects/av.jpg",
  },
  {
    quote:
      "A reliable developer who always delivers high quality solutions.",
    author: "Sarra Trabelsi",
    role: "UI/UX Designer",
    avatar: "/projects/av.jpg",
  },
  {
    quote:
      "One of the best teammates I've ever worked with.",
    author: "Youssef Kallel",
    role: "Software Architect",
    avatar: "/projects/av.jpg",
  },
];


export const Testimonials = () => {

  const [current, setCurrent] = useState(0);


  // Auto slide
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );

    }, 4000);


    return () => clearInterval(interval);

  }, []);



  const nextSlide = () => {

    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  };


  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  };


  return (

    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
    >

      {/* Background */}
      <div
        className="
        absolute top-1/2 left-1/2 
        w-[800px] h-[800px] 
        bg-primary/5 rounded-full 
        blur-3xl 
        -translate-x-1/2 
        -translate-y-1/2
        "
      />


      <div className="container mx-auto px-6 relative z-10">


        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span
            className="
            text-secondary-foreground 
            text-sm 
            font-medium 
            tracking-wider 
            uppercase
            "
          >
            What People Say
          </span>


          <h2
            className="
            text-4xl 
            md:text-5xl 
            font-bold 
            mt-4 
            mb-6 
            text-secondary-foreground
            "
          >

            Kind Words from{" "}

            <span className="font-serif italic font-normal text-white">

              amazing people.

            </span>

          </h2>


        </div>



        {/* Slider */}


        <div className="max-w-4xl mx-auto">


          <div className="relative">


            <AnimatePresence mode="wait">


              <motion.div

                key={current}

                initial={{
                  opacity:0,
                  x:50
                }}

                animate={{
                  opacity:1,
                  x:0
                }}

                exit={{
                  opacity:0,
                  x:-50
                }}

                transition={{
                  duration:0.4
                }}

                className="
                glass 
                relative 
                p-8 
                md:p-12 
                rounded-3xl 
                glow-border
                "

              >


                {/* Quote Icon */}

                <div
                  className="
                  absolute 
                  -top-4 
                  left-8 
                  w-12 
                  h-12 
                  rounded-full 
                  bg-primary 
                  flex 
                  items-center 
                  justify-center
                  "
                >

                  <Quote className="w-6 h-6 text-primary-foreground"/>

                </div>




                <blockquote
                  className="
                  text-xl 
                  md:text-2xl 
                  font-medium 
                  leading-relaxed 
                  mb-8 
                  pt-4
                  "
                >

                  "{testimonials[current].quote}"

                </blockquote>




                <div className="flex items-center gap-4">


                  <img

                    src={testimonials[current].avatar}

                    alt={testimonials[current].author}

                    className="
                    w-14 
                    h-14 
                    rounded-full 
                    object-cover 
                    ring-2 
                    ring-primary/20
                    "

                  />



                  <div>

                    <div className="font-semibold">

                      {testimonials[current].author}

                    </div>


                    <div className="text-sm text-muted-foreground">

                      {testimonials[current].role}

                    </div>


                  </div>


                </div>


              </motion.div>


            </AnimatePresence>





            {/* Navigation */}


            <div
              className="
              flex 
              items-center 
              justify-center 
              gap-6 
              mt-8
              "
            >


              <button

                onClick={prevSlide}

                className="
                p-3 
                rounded-full 
                glass 
                hover:bg-primary/10 
                hover:text-primary 
                transition-all
                "

              >

                <ChevronLeft/>

              </button>





              <div className="flex gap-2">


                {testimonials.map((_, idx)=>(


                  <button

                    key={idx}

                    onClick={() => setCurrent(idx)}

                    className={`
                    h-2 
                    rounded-full 
                    transition-all 
                    duration-300
                    
                    ${
                      idx === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }
                    `}

                  />


                ))}


              </div>





              <button

                onClick={nextSlide}

                className="
                p-3 
                rounded-full 
                glass 
                hover:bg-primary/10 
                hover:text-primary 
                transition-all
                "

              >

                <ChevronRight/>

              </button>



            </div>



          </div>


        </div>



      </div>


    </section>

  );

};