import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardSection = () => {
  // Assuming you have your data stored in an array called 'collegesData'
  const collegesData = useLoaderData();
  console.log('Colleges Data', collegesData);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {collegesData.map((college, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-40 object-cover"
              src={college.college_image}
              alt={college.college_name}
            />
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">{college.college_name}</h2>
              <p className="text-gray-500 text-sm mb-2">{college.admission_dates}</p>

              <div>
                <h3 className="text-md font-bold mb-1">Events</h3>
                <ul className="text-gray-600 text-sm mb-4">
                  {college.events.map((event, index) => (
                    <li key={index}>
                      {event.event_name} - Date: {event.date} - Location: {event.location}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-md font-bold mb-1">Research History</h3>
                <ul className="text-gray-600 text-sm mb-4">
                  {college.research_history.map((research, index) => (
                    <li key={index}>
                      {research.research_title} - Faculty Lead: {research.faculty_lead} - Date: {research.date}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-md font-bold mb-1">Sports Categories</h3>
                <ul className="text-gray-600 text-sm">
                  {college.sports_categories.map((category, index) => (
                    <li key={index}>
                      Category: {category.category_name} - Description: {category.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
