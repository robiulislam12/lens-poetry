import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('https://lens-poetry.vercel.app/servicesItem')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

  return (
    <div className="container mx-auto py-12">
      <div className="pb-6 text-center">
        <h2 className="text-5xl">Our Services</h2>
        <p className="text-lg text-gray-500 w-3/4 mx-auto">
          We are provide world class services for wildlife photography. you want
          to know more about my work or are in interested in developing a
          photographic project for a specific conservation area, let me know.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      {
          services.map(service => {
            return <Service key={service._id} service={service}/>
          })
        }
      </div>
      <div className="mt-10 text-center">
        <Link to="/services">
          <button className="bg-teal-500 px-12 py-4 text-lg rounded text-white font-bold hover:bg-teal-700">See All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
