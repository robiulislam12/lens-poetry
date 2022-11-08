import { Card, Rating } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({service}) => {
  const {title, photoURL, price, description, _id} = service;
  return (
    <div className="max-w-sm">
      <PhotoProvider>
        <Card>
          <PhotoView src={photoURL}>
            <img src={photoURL} alt="" className="rounded h-60"/>
          </PhotoView>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description.slice(0, 150) + ' read more(...)'}
          </p>
          <Rating>
            <Rating.Star />
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              4.95
            </p>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
              73 reviews
            </p>
          </Rating>
          <hr />
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to={`/services/${_id}`}
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </Card>
        </PhotoProvider>
    </div>
  );
};

export default Service;
