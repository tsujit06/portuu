import { useState } from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "AI/ML for Geodata Analysis",
    image: "src/components/certificates/aiml for geodata analysis.jpg",
    description: "IIRS ISRO provided 20 days online course about Artificial intelligence and machine learning used in Space Research programmes.",
  },
  {
    title: "Explore Machine learning with Tensorflow",
    image: "src/components/certificates/explor ml with tensorflow.jpg",
    description: "Machine learning components with TensorFlow",
  },
  {
    title: "BIG DATA analysis",
    image: "src/components/certificates/big data.jpg",
    description: "Certification provided by Infosys Springboard on completion of Course",
  },
  {
    title: "Natural Language Processing using Python",
    image: "src/components/certificates/nlp using python.jpg",
    description: "Certification provided by Infosys Springboard on completion of Course",
  },
  {
    title: "Introductin to Generative AI",
    image: "src/components/certificates/intro to gen ai.jpg",
    description: "Certification provided by Infosys Springboard on completion of Course",
  },
  {
    title: "AI for students:Build Your own AI Model",
    image: "src/components/certificates/nxt.jpg",
    description: "Workshop about Artificial intelligence Models hosted by Mr.Abhinav Guptapu",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<null | {
    title: string;
    description: string;
  }>(null);

  return (
    <div className="min-h-auto flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Certifications</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover"/>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
            <p className="mt-4">{selectedCert.description}</p>
            
          </div>
        </motion.div>
      )}
    </div>
  );
}
