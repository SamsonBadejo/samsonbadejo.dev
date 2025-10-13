import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SoftwareDevCert from "../../assets/Badejo Samson-Software Developer Bootcamp_ Certificate of Completion_page-0001.jpg";
import MongodbCert from "../../assets/sammie-vibex-8bf780aa-3217-4e77-873b-244f22bdea13-certificate_page-0001.jpg";

const certificates = [
  {
    title: "Software Developer Certificate",
    school: "Gomycode Tech School",
    desc: "Recognized for mastering core software development principles, version control, and agile methodologies.",
    img: SoftwareDevCert,
  },
  {
    title: "MongoDB & Node.js Developer Path",
    school: "Gomycode Tech School",
    desc: "Completed specialized backend training focused on Node.js and MongoDB for building scalable web applications.",
    img: MongodbCert,
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <section id="certificates" className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="text-4xl font-bold mb-3 text-white"
          data-aos="fade-up"
        >
          My Certificates
        </h1>

        <p
          className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Certified Full Stack & Software Developer from{" "}
          <strong>Gomycode Tech School</strong>, with specialization in{" "}
          <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
          <strong>MongoDB</strong> — showcasing my hands-on experience in modern
          web development.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-[#0b0b0b] rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-[red]/40 transition-all duration-300 cursor-pointer max-w-sm"
              onClick={() => setSelectedImage(cert.img)}
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-white">
                  {cert.title}
                </h2>
                <p className="text-sm text-gray-400">{cert.school}</p>
                <p className="text-gray-300 text-sm mt-2">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg border-2 border-[red] transition-transform duration-300 scale-100 hover:scale-105"
          />
          <button
            className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-[red]"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
