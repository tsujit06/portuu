import { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "CODE - IGNITER 2023",
    description: "Secured 1st place in the 7th National Level Coding Competition, CODE IGNITER 2023, held on 28th June 2023. The competition provided an excellent platform to showcase my coding abilities and problem-solving skills, and I was honored to be recognized as the top performer among participants from across the nation.",
    image: "src/components/certificates/code ign.jpg",
  },
  {
    id: 2,
    title: "TECH-AVISHKAR HACKATHON",
    description: "Secured first place in the Software Development category at TECH-AVISHKAR, a 24-hour hackathon organized by IEEE Mysore Subsection in collaboration with ATME College of Engineering, Mysuru. The event challenged participants to develop innovative software solutions to address complex real-world problems within a constrained timeframe.",
    image: "src/components/certificates/first.jpg",

  },
  {
    id: 3,
    title: "INFOTHON 3.0",
    description: "Participated in a 24-hour national-level hackathon focused on logistics and technology, organized by Unstop. Competed against skilled participants from across the country to develop innovative solutions addressing challenges in the logistics sector. The event provided a platform to showcase technical expertise, problem-solving skills, and the ability to deliver impactful software solutions within a limited timeframe.",
    image: "src/components/certificates/infothon.jpg",

  },
  {
    id: 4,
    title: "CODE HUNT 2K23",
    description: "State level coding competation organized by Vidyavardhaka College of Engineering with association with IEEE-CIS",
    image: "src/components/certificates/code hunt 2k23.jpg",
  },
  {
    id: 5,
    title: "SOFTSKILL TRAINING PROGRAMME",
    description: "Got to improve Interpersonal Skills · Organization Skills · Time Management · Team Leadership · Team Building · Team Management · Leadership · Communication · Interpersonal Communication skills.",
    image: "src/components/certificates/1738297451263.jpg",
  },
  {
    id: 6,
    title: "Participation in Tech Avishkar 2022 by IEEE",
    description: "24 - Hour National level hackathon organized by IEEE",
    image: "src/components/certificates/participation.jpg",
  },
];

export default function AwardsParticipation() {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-blue-700 to-gray-900 flex flex-col items-center justify-center px-6">
      <h2 className="text-white text-3xl font-bold mb-6">Awards & Participation</h2>

      {/* Slideshow Container */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          style={{ width: `${certificates.length * 300}px` }} // Dynamically adjust width
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="w-90 h-72 cursor-pointer flex-shrink-0 border-4 border-gray-300 rounded-lg p-1 bg-white"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCert(cert)}
            >
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-md shadow-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4" onClick={() => setSelectedCert(null)}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center relative">
            <h3 className="text-2xl font-bold">{selectedCert.title}</h3>

            {/* Image Frame & Full-Screen View Option */}
            <div className="border-4 border-gray-300 rounded-md p-1 bg-gray-100 mt-4 relative">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-64 object-contain rounded-md cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreen(true);
                }}
              />
            </div>

            {/* Scrollable Description */}
            <div className="mt-4 p-3 bg-gray-200 rounded-md max-h-32 overflow-y-auto text-gray-700">
              {selectedCert.description}
            </div>

            <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg" onClick={() => setSelectedCert(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Full-Screen Image View */}
      {fullscreen && selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setFullscreen(false)}>
          <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
}
