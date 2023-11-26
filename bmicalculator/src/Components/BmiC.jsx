// import React, { useState } from 'react';

const BmiC = () => {
  //   const [weight, setWeight] = useState('');
  //   const [height, setHeight] = useState('');
  //   const [result, setResult] = useState('');
  //   const [category, setCategory] = useState('');

  //   const calculateBMI = () =>

  //   };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div
        className="bg-white p-4 md:p-8 rounded shadow-md md:w-96 w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/69/ae/9d/69ae9ddef4631a407efe8de462a19d66.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-800">
          BMI Calculator
        </h1>

        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-700">
            Weight (kg):
          </label>
          <input
            type="text"
            id="weight"
            //   value={weight}
            //   onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-teal-500 bg-gray-100 text-gray-800 placeholder-gray-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="height" className="block text-gray-700">
            Height (cm):
          </label>
          <input
            type="text"
            id="height"
            //   value={height}
            //   onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-teal-500 bg-gray-100 text-gray-800 placeholder-gray-500"
          />
        </div>

        <button
          // onClick={calculateBMI}
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 focus:outline-none"
        >
          Calculate BMI
        </button>

        <div className="mt-4">
          <label htmlFor="result" className="block text-gray-700">
            Result:
          </label>
          <input
            type="text"
            id="result"
            //   value={result}
            readOnly
            className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100 text-gray-800 placeholder-gray-500"
          />
        </div>

        <div id="category" className="mt-4 text-gray-700">
          {/* {category && <p>BMI Category: {category}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default BmiC;
