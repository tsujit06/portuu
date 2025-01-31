import React, { useEffect, useState } from 'react';
import { Download, LinkedinIcon, Mail } from 'lucide-react';

const gradients = [
  'from-purple-900 via-indigo-900 to-blue-900',
  'from-blue-900 via-purple-900 to-indigo-900',
  'from-indigo-900 via-blue-900 to-purple-900'
];

export default function Hero() {
  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWebsite = () => {
    const linkedInUrl = "https://www.linkedin.com/in/sujithlb06"; // Replace with your LinkedIn profile URL
    window.open(linkedInUrl, "_blank");
  };
  
  

  const downloadCV = () => {
    // Replace with your actual CV file URL
    const cvUrl = 'https://drive.google.com/file/d/1LNAbQz_FQ_C41563uxFq8aaPR89RPuNO/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'YourName-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradients[currentGradient]} transition-colors duration-1000`}>
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between pt-32">
      <div className="md:w-1/2 text-white text-left">
  <h1 className="text-7xl font-bold mb-8 leading-tight"> {/* Increased size */}
    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Sujith L B</span>
  </h1>
  <p className="text-3xl mb-12 leading-relaxed"> {/* Increased size */}
    Software Engineer | Problem Solver | Tech Enthusiast
  </p>

  {/* Button Container */}
  <div className="flex flex-col gap-6 items-start"> {/* Better alignment */}
    <button
      onClick={downloadCV}
      className="flex items-center gap-6 bg-white text-gray-900 font-bold py-5 px-16 w-80 rounded-full transition duration-300 hover:bg-gray-100 hover:scale-105"
    >
      <Download className="w-6 h-6" />
      Download CV
    </button>

    <button
      onClick={scrollToContact}
      className="flex items-center gap-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-16 w-80 rounded-full transition duration-300 hover:scale-105"
    >
      <Mail className="w-6 h-6" />
      Contact Me
    </button>

    <button
      onClick={openWebsite}
      className="flex items-center gap-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-bold py-5 px-16 w-80 rounded-full transition duration-300 transform hover:scale-110 shadow-lg"
    >
      <LinkedinIcon className="w-6 h-6" />
      LinkedIn
    </button>
  </div>
</div>

        <div className="md:w-1/2 mt-16 md:mt-0">
          <div className="w-[420px] h-[420px] mx-auto relative"> {/* Increased size slightly */}
            <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-20"></div>
            <div className="w-full h-full rounded-full overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <img
                src="src/components/image.png"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
      
  );
}