import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">Your Logo</span>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white mr-4">Home</a>
          <a href="#" className="text-white mr-4">Check My Answer</a>
        </div>
        <div className="flex items-center">
        <Link to='student-login'>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">Student Login</button>
        </Link>
        <Link to="teacher-login">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Teacher Login</button>

        </Link>
        </div>
      </div>
    </nav>
  );
}

export default Home;
