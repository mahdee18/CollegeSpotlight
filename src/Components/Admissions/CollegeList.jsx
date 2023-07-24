import { Link, useLoaderData } from 'react-router-dom';

const CollegeList = () => {
    const collegeData = useLoaderData();
    console.log(collegeData);
    return (
        <div className="bg-white p-6 mr-auto  rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">College List</h2>
            <ul className="space-y-4">
                {collegeData.map(college => (
                    <li key={college._id} className="flex items-center justify-center">
                        <Link to={`/admissions/${college._id}`} className="text-black hover:underline">
                            {college.college_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeList;