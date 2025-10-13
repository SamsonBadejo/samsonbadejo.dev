import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "01c9df18-adcf-4818-a9cc-1be3cb4626a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6"
      data-aos="fade-up"
    >
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Left Side - Contact Info */}
        <div data-aos="fade-right" data-aos-delay="300">
          <h2 className="text-4xl font-bold text-[red] mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            I’d love to connect! Whether you have a project idea, need a
            developer to collaborate with, or just want to chat tech — feel free
            to reach out anytime.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[red] text-xl" />
              <p>zwitsam8@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[red] text-xl" />
              <p>+234 810 951 4251</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationArrow className="text-[red] text-xl" />
              <p>Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-[red] text-xl" />
              <a
                href="https://www.linkedin.com/in/samson-badejo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[red] transition"
              >
                linkedin.com/in/samson-badejo
              </a>
            </div>
          </div>

          {/* Follow Me */}
          <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-semibold text-[red] mb-4">Follow Me</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/SamsonBadejo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[red] transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/samson-badejo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[red] transition text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={onSubmit}
          data-aos="fade-left"
          data-aos-delay="400"
          className="bg-[#111] p-8 rounded-2xl shadow-lg flex flex-col gap-5"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-2">
            Send Me a Message
          </h3>

          {/* Name */}
          <label htmlFor="name" className="text-gray-400 text-sm">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-[red]"
          />

          {/* Email */}
          <label htmlFor="email" className="text-gray-400 text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-[red]"
          />

          {/* Subject */}
          <label htmlFor="subject" className="text-gray-400 text-sm">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-[red]"
          />

          {/* Message */}
          <label htmlFor="message" className="text-gray-400 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message..."
            required
            className="p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-[red]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[red] hover:bg-[#740101] cursor-pointer py-3 rounded-lg font-semibold transition-all"
          >
            Send Message
          </button>

          <span className="text-sm text-gray-400 mt-2">{result}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
