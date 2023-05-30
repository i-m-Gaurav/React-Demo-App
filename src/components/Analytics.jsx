import React from "react";
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src= {Laptop} alt="/" />
        <div className="flex flex-col justify-center ">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage data Analytics Centrally</h1>
            <p>Velit reprehenderit eiusmod laboris culpa nulla eiusmod ad occaecat aute irure. Aute laborum ex excepteur duis. Voluptate duis nisi nostrud proident pariatur nostrud nulla aliquip aliquip nostrud dolor magna adipisicing. Ad ad incididunt velit laboris minim. Proident est commodo voluptate occaecat ex sint. Dolore in cupidatat et magna amet sit ea elit.</p>
            <button className="bg-black w-[200px] rounded rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Get Started</button>
        </div>
        
      </div>
    </div> 
  );
};

export default Analytics;
