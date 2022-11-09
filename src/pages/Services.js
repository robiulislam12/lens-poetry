import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../components/Service";
import useTitles from "../hooks/useTitles";

const Services = () => {

  const services = useLoaderData() || [];

  // set page title
  useTitles("Services");
  return (
    <div className="container mx-auto py-12">
      <div className="pb-6 text-center">
        <h2 className="text-5xl">Take a Service</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {
          services.map(service => {
            return <Service key={service._id} service={service}/>
          })
        }
      </div>
    </div>
  );
};

export default Services;
