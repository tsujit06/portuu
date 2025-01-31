import React from 'react';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Looking for challenging role in dynamic organization to apply and grow
          professionally
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <User className="text-blue-600 dark:text-blue-400" />
              <span className="dark:text-gray-300">Software Engineer</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600 dark:text-blue-400" />
              <span className="dark:text-gray-300">lbsujith45@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600 dark:text-blue-400" />
              <span className="dark:text-gray-300">Mysuru, Karnataka</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-blue-600 dark:text-blue-400" />
              <span className="dark:text-gray-300">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}