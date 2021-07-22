import React from 'react';
import { Link } from 'react-router-dom'

const Onboard = () => {
    return (
        <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-5xl text-white">Hello 👋</h1>
        <p className="text-gray-400 mt-5 text-lg">
          Click get started to view set up redux boiler plate outputs. 
          You might like to save the boiler plate a side for later use since we removing it soon
        </p>
        <Link to="/dashboard">
        <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
            Get started 🚀
        </button>
        </Link>
      </div>
    )
}

export default Onboard;