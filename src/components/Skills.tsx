import React from 'react';
import { Code, Server, Database, PenTool as Tool } from 'lucide-react';

export default function Skills() {
  return (
    <div id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-blue-600 w-6 h-6" />
              <h3 className="font-bold text-xl">Frontend</h3>
            </div>
            <ul className="space-y-2">
              <li>React.js</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Server className="text-blue-600 w-6 h-6" />
              <h3 className="font-bold text-xl">Backend</h3>
            </div>
            <ul className="space-y-2">
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>REST</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-blue-600 w-6 h-6" />
              <h3 className="font-bold text-xl">Database</h3>
            </div>
            <ul className="space-y-2">
              <li>Firebase</li>
              <li>NoSQL</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Tool className="text-blue-600 w-6 h-6" />
              <h3 className="font-bold text-xl">Tools</h3>
            </div>
            <ul className="space-y-2">
              <li>Git/Github</li>
              <li>Firebase</li>
              <li>Flutter</li>
              <li>TensorFlow</li>
              <li>YOLO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}