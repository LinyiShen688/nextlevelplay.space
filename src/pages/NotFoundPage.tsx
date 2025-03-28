import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - NextLevelPlay.space</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-apple-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-apple-black dark:text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-apple-dark-gray mb-8 max-w-lg mx-auto">
          The page you are looking for does not exist or has been moved.
          Please check the URL or return to the homepage.
        </p>
        <Link 
          to="/"
          className="inline-block bg-apple-blue hover:bg-apple-dark-blue text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage; 