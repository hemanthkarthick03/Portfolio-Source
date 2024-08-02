import React from 'react';

const Resume = () => {
  return (
    <div className="resume-download">
      <a href="/Resume.pdf" download>
        <button className="px-6 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
