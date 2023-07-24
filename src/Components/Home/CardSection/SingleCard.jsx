import React from 'react';

const SingleCard = ({ college }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <img className="w-full" src={college.college_image} alt={college.college_name} />
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
          {college.college_name}
        </a>
        <p className="text-gray-500 text-sm">{college.admission_dates}</p>
      </div>
      <div className="px-6 py-3">
        {/* Render college events */}
        <h3 className="font-medium text-md mb-2">Events</h3>
        <ul className="text-gray-500 text-sm">
          {college.events.map((event, index) => (
            <li key={index}>
              <span className="mr-1">{event.event_name}</span>
              <span className="mr-1">- Date: {event.date}</span>
              <span>Location: {event.location}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-3">
        {/* Render research history */}
        <h3 className="font-medium text-md mb-2">Research History</h3>
        <ul className="text-gray-500 text-sm">
          {college.research_history.map((research, index) => (
            <li key={index}>
              <span className="mr-1">Title: {research.research_title}</span>
              <span className="mr-1">- Faculty Lead: {research.faculty_lead}</span>
              <span>Date: {research.date}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-3">
        {/* Render sports categories */}
        <h3 className="font-medium text-md mb-2">Sports Categories</h3>
        <ul className="text-gray-500 text-sm">
          {college.sports_categories.map((category, index) => (
            <li key={index}>
              <span className="mr-1">Category: {category.category_name}</span>
              <span>Description: {category.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleCard;
