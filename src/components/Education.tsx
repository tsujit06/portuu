import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelors in Engineering Degree",
      school: "ATME COLLEGE OF ENGINEERING, Mysuru",
      year: "2021-2025",
      description: "Computer Science Engineering and Specialized in Artificial Intelligence and Machine Learning with 7.56CGPA upto 6th semester with no backlogs"
    },
    {
      degree: "Pre-University Degree",
      school: "Sadvidya Composite PU College, Mysuru",
      year: "2020-2021",
      description: "Focus on Computer Science and other Basic subjects like Physics, Chemistry and Mathematics. Passed with percentage of 73.5%"
    },
    {
      degree: "High School",
      school: "Bruhaspatya Charya Vidya Samasthe, Mysuru",
      year: "2018-2019",
      description: "With percentage of 87.36%"
    }
  ];

  return (
    <div id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" />
                  </div>
                </div>
                <div className="w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 mb-2">{edu.school}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.year}</span>
                    </div>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}