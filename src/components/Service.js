import { Card, Rating } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = () => {
  return (
    <div className="max-w-sm">
      <PhotoProvider>
        <Card>
          <PhotoView src="https://flowbite.com/docs/images/blog/image-1.jpg">
            <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" className="rounded"/>
          </PhotoView>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
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
              $599
            </span>
            <Link
              to="/services/2"
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
