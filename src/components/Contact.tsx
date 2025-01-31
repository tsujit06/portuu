import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 dark:text-white">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mail me at</p>
                      <p className="text-lg font-medium dark:text-white">lbsujith45@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Phone className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Call me at</p>
                      <p className="text-lg font-medium dark:text-white">+91 8970534381</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm text-center">
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Social Links</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Connect with me on social media platforms
                  </p>
                  <div className="flex justify-center space-x-4">
                  <a href="https://www.facebook.com/sujith.lb" className="p-3 bg-blue-600 dark:bg-blue-700 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a href="www.linkedin.com/in/sujithlb06" className="p-3 bg-blue-600 dark:bg-blue-700 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2zm-6.5 17h-3v-4.5c0-1.45-.75-2.5-2-2.5s-2 1.05-2 2.5V17h-3V9h3v1.75c0 2.75 1.75 4.5 4.5 4.5s4.5-1.75 4.5-4.5V9h3v8h-3zM4.5 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 10h-3v-8h3v8z"></path>
                      </svg>
                    </a>
                    <a href="https://x.com/tsujitlb" className="p-3 bg-blue-400 dark:bg-blue-500 text-white rounded-full hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="https://github.com/tsujit06" className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/_tsujit/" className="p-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white rounded-full hover:opacity-80 transition duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7.5 2C4.42 2 2 4.42 2 7.5v9C2 19.58 4.42 22 7.5 22h9c3.08 0 5.5-2.42 5.5-5.5v-9C22 4.42 19.58 2 16.5 2h-9zM12 7.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5S7.5 14.5 7.5 12 9.5 7.5 12 7.5zm0 1.5a3 3 0 100 6 3 3 0 000-6zm5.25-3a.75.75 0 110 1.5.75.75 0 010-1.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}