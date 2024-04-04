// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  // Function to generate a random link for social media
  const getRandomSocialLink = () => {
    const socialMediaLinks = [
      'https://twitter.com/',
      'https://facebook.com/',
      'https://instagram.com/',
      // Add more social media links as needed
    ];

    const randomIndex = Math.floor(Math.random() * socialMediaLinks.length);
    return socialMediaLinks[randomIndex];
  };

  return (
    <footer className="bg-white text-black p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="m-0">&copy; 2024 Gallery. All rights reserved.</p>
      </div>

      <div className="flex items-center justify-center space-x-4 md:flex-grow md:justify-center md:space-x-4">
        {/* Social media links */}
        <a href={getRandomSocialLink()} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={getRandomSocialLink()} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>


    </footer>
  );
};

export default Footer;

