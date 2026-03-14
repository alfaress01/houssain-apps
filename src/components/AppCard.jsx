import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ title, description, icon, link }) => {
  const isInternal = link.startsWith('/');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden h-full flex flex-col">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-center w-20 h-20 bg-blue-50 dark:bg-indigo-900/50 rounded-2xl mb-6 mx-auto text-5xl shadow-sm">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6 flex-grow leading-relaxed">{description}</p>
        <div className="text-center mt-auto">
          {isInternal ? (
            <Link 
              to={link} 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-2 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              عرض التطبيق
            </Link>
          ) : (
            <a 
              href={link} 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-2 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              عرض التطبيق
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppCard;
