import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  longDescription: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Designed a Student Management System",
      description: "Simple Webpage connected to databases for student details management usingHTML,CSS & SQL databases",
      image: "src/components/projects images/elearning-education-internet-lessons-online-260nw-2158034833.jpg",
      technologies: ["HTML5", "CSS", "MySQL"],
      longDescription: "This project was developed as part of the DBMS course to manage student details, such as name, roll number, and course, using HTML, CSS, and SQL. The webpage was created with HTML and styled using CSS to provide a clean and user-friendly interface. SQL was used to store and manage student data in a MySQL database, with CRUD (Create, Read, Update, Delete) operations enabling interaction with the records. The project was hosted locally using XAMPP, integrating the front-end with the back-end. This project allowed me to apply my understanding of database management and SQL queries, providing hands-on experience in managing and interacting with databases for real-world applications."
    },
    {
      id: 2,
      title: "Application for Elderly (MED-ID)",
      description: "A collaborative task management medical application",
      image: "src/components/projects images/top-view-medical-stethoscope-icon-260nw-2075382679.jpg",
      technologies: ["Flutter", "Firebase", "Flutter libraries", "Dart"],
      longDescription: "This project was developed to assist elderly individuals in managing their medical tasks and appointments. The app was created using Flutter for the front-end, ensuring a cross-platform experience for both Android and iOS users. Firebase was utilized for backend services such as authentication, real-time database, and storage. Various Flutter libraries were incorporated to enhance functionality and user experience, while Dart was used as the programming language. The project aimed to simplify medical task management, providing features like medication tracking, appointment reminders, and health monitoring, specifically tailored to the needs of elderly individuals. This project allowed me to gain hands-on experience in mobile app development, backend integration, and working with real-time databases."
    },
    {
      id: 3,
      title: "Chatbot using NLP",
      description: "A Logistics and Service task management application",
      image: "src/components/projects images/85z_2201_w009_n001_95c_p6_95.jpg",
      technologies: ["Python", "HTML", "JavaScript"],
      github: "https://github.com/tsujit06/CODE-SKWAAD_LM25.git",
      longDescription: "The project was developed for a national-level hackathon with a focus on logistics and service task management. The project aimed to create an intelligent chatbot capable of handling logistics-related queries and assisting with service management tasks. Built using Python for natural language processing (NLP), the chatbot was trained to understand and process queries related to logistics operations, including tracking and reporting. HTML and JavaScript were utilized to create the user interface, ensuring an interactive and seamless experience for users. This project provided me with valuable insights into time management and logistics, enhancing my ability to analyze and manage complex systems efficiently. It also allowed me to develop a deeper understanding of NLP and its applications in real-world scenarios."
    },
    {
      id: 4,
      title: " Frontend design for Meditation and Concentration",
      description: "A First year Web development project",
      image: "src/components/projects images/meditation.jpg",
      technologies: ["HTML", "CSS", "Javascript"],
      longDescription: "A real-time task management application with features like task creation, assignment, due dates, and Time management"
    },
    {
      id: 5,
      title: "AI based Pothole detection and Mapping for Road safety",
      description: "An App to report potholes in real time, with live detection and mapping using Deeplearning.",
      image: "src/components/projects images/Pothole-Detection-Thumbnail-Image-768x378.jpg",
      technologies: ["Python", "ComputerVision", "TensorFlow", "Image processing","Firebase"],
      demo: "src/components/projects images/Screenrecorder-2024-07-24-13-32-04-260.mp4",
      longDescription: "The Pothole Detection Project is an AI-based solution aimed at automating the detection and management of potholes on roadways. The project leverages advanced computer vision and machine learning algorithms, including TensorFlow and YOLOv8, to identify potholes from images and video feeds captured by cameras installed on vehicles or infrastructure. The data is processed in real time, enabling immediate reporting and analysis of pothole locations. The system uses Firebase for cloud storage and real-time updates, while Flutter and Dart are used for developing the user interface, allowing for easy interaction and tracking of pothole detection across different locations. The primary goal of this project is to improve road safety and maintenance by providing authorities with accurate and up-to-date data on potholes, facilitating faster repairs and reducing the risk of accidents. Through this project, I gained hands-on experience in AI model training, image processing, real-time data management, and full-stack development, all while learning how to efficiently manage large-scale data for practical applications."
    },
    {
      id: 6,
      title: "Stock price Prediction using News headlines (Deep learning)",
      description: " An web application to predict the probability of getting returns in certain number ofdays",
      image: "src/components/projects images/bar-chart-financial-graph-stock-260nw-1865301214.jpg",
      technologies: ["NLP", "ReLu", "RNN","plotly","python","Stremlit"],
      longDescription: "The Stock Prediction Project utilizes machine learning algorithms to predict stock market trends based on historical data and real-time news headlines. By leveraging deep learning techniques, the system analyzes historical stock data and incoming news articles to generate accurate predictions of stock prices. The project employs NLP (Natural Language Processing) models to parse and understand the sentiment of news headlines, which are scraped using tools like Telethon for real-time data retrieval. This sentiment analysis is then integrated with historical stock data to enhance prediction accuracy. The project also explores various machine learning algorithms to assess the most effective models for stock prediction, providing insights into trends and market shifts. Through this project, I gained practical experience in data scraping, sentiment analysis, time-series forecasting, and the application of deep learning for financial predictions, helping me develop a comprehensive understanding of how AI can be used for predictive analytics in the stock market."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X />
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700 mb-6">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}