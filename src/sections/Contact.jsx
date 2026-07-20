import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "manaiaymen2003@gmail.com",
    href: "mailto:manaiaymen2003@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+216 28 475 771", // Remplace par ton numéro
    href: "tel:+216XXXXXXXX",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tunisia",
    href: "https://maps.google.com/?q=Tunisia",
  },
];


export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // success or error
    message: "",
  });



  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({
        type: null,
        message: "",
    });

    try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_SERVICE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            throw new Error(
                "Email configuration is missing. Please check your environment variables."
            );
        }

        await emailjs.send(
            serviceId,
            templateId,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            publicKey
        );

        setSubmitStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
        });

        setFormData({
            name: "",
            email: "",
            message: "",
        });

    } catch (err) {
        console.error("Email error:", err);

        setSubmitStatus({
            type: "error",
            message:
                err.text || "Failed to send message. Please try again later.",
        });
    } finally {
        setIsLoading(false);
    }
};


  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full">

        <div
          className="
          absolute 
          top-1/4 
          left-1/4 
          w-96 
          h-96 
          bg-primary/5 
          rounded-full 
          blur-3xl
          "
        />

        <div
          className="
          absolute 
          bottom-1/4 
          right-1/4 
          w-64 
          h-64 
          bg-highlight/5 
          rounded-full 
          blur-3xl
          "
        />

      </div>



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
            animate-fade-in
            "
          >
            Get In Touch
          </span>



          <h2
            className="
            text-4xl 
            md:text-5xl 
            font-bold 
            mt-4 
            mb-6 
            animate-fade-in
            animation-delay-100
            "
          >

            <span className="text-primary">
              Let's build
            </span>

            {" "}

            <span
              className="
              font-serif 
              italic 
              font-normal 
              text-foreground
              "
            >
              something great.
            </span>


          </h2>



          <p
            className="
            text-muted-foreground 
            animate-fade-in 
            animation-delay-200
            "
          >
            Have a project in mind? I'd love to hear about it.
            Send me a message and let's discuss how we can work together.
          </p>


        </div>




        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">


          <div
            className="
            glass 
            p-8 
            rounded-3xl 
            border 
            border-primary/30 
            animate-fade-in 
            animation-delay-300
            "
          >


            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >


              {/* Name */}

              <div>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>


                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                  }
                  className="
                  w-full 
                  px-4 
                  py-3 
                  bg-surface 
                  rounded-xl 
                  border 
                  border-border 
                  focus:border-primary 
                  focus:ring-1 
                  focus:ring-primary 
                  outline-none 
                  transition-all
                  "
                />

              </div>





              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>


                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                  }
                  className="
                  w-full 
                  px-4 
                  py-3 
                  bg-surface 
                  rounded-xl 
                  border 
                  border-border 
                  focus:border-primary 
                  focus:ring-1 
                  focus:ring-primary 
                  outline-none 
                  transition-all
                  "
                />

              </div>





              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>


                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                  }
                  className="
                  w-full 
                  px-4 
                  py-3 
                  bg-surface 
                  rounded-xl 
                  border 
                  border-border 
                  focus:border-primary 
                  focus:ring-1 
                  focus:ring-primary 
                  outline-none 
                  transition-all 
                  resize-none
                  "
                />


              </div>





              {/* Button */}

              <Button
                    className="w-full"
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>Sending...</>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-5 h-5 ml-2" />
                        </>
                    )}
                </Button>
                {submitStatus.type && (
                        <div
                            className={`flex items-center gap-3 p-4 rounded-xl border mt-4 ${
                                submitStatus.type === "success"
                                    ? "bg-green-500/10 border-green-500/20 text-green-500"
                                    : "bg-red-500/10 border-red-500/20 text-red-500"
                            }`}
                        >
                            {submitStatus.type === "success" ? (
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                            ) : (
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            )}

                            <p className="text-sm">
                                {submitStatus.message}
                            </p>
                        </div>
                    )}
            </form>
          </div>
          <div
  className="
    space-y-6
    animate-fade-in
    animation-delay-400
  "
>
  {/* Contact Information */}
  <div className="glass rounded-3xl p-8 border border-primary/30">
    <h3 className="text-2xl font-semibold mb-6">
      Contact Information
    </h3>

    <div className="space-y-5">
      {contactInfo.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={
            item.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="
            flex
            items-center
            gap-4
            p-4
            rounded-xl
            hover:bg-primary/5
            transition-all
            duration-300
            group
          "
        >
          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-primary/10
              flex
              items-center
              justify-center
              group-hover:bg-primary
              transition-all
            "
          >
            <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
          </div>

          <div>
            <h4 className="font-semibold">
              {item.title}
            </h4>

            <p className="text-muted-foreground text-sm">
              {item.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  </div>

  {/* Availability Card */}
  <div className="glass rounded-3xl p-8 border border-primary/30">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

      <span className="font-medium">
        Currently Available
      </span>
    </div>

    <p className="text-muted-foreground text-sm leading-7">
      I'm currently open to new opportunities and exciting projects.
      Whether you need a full-time developer, an internship,
      or freelance work, let's talk!
    </p>
  </div>
</div>
         
          


        </div>


      </div>


    </section>
  );
};