import { Button } from "flowbite-react";
import React from "react";
import Ratings from "../components/Ratings";
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";

const MyReview = () => {
  return (
    <div className="lg:w-3/4 mx-auto py-12 sm-p-4">
      <div className="bg-white p-4 rounded-lg shadow my-4">
        {/* All Reviews */}
        <h2 className="text-3xl font-semibold mb-4">My All Reviews</h2>
        <hr />
        <div className="border-teal-500 mb-4 border p-6 rounded">
            <div className="flex justify-between items-start border-b pb-4">
                <h2 className="text-lg hover:underline cursor-pointer">Noteworthy technology acquisitions 2021</h2>
                <Button.Group outline={true}>
                    <Button color="info" >
                       <FaEdit/>
                    </Button>
                    <Button color="info">
                        <FaTrashAlt/>
                    </Button>
                </Button.Group>
            </div>
            <Ratings value={5} border/>
        </div>
        <div className="border-teal-500 mb-4 border p-6 rounded">
            <div className="flex justify-between items-start border-b pb-4">
                <h2 className="text-lg hover:underline cursor-pointer">Noteworthy technology acquisitions 2021</h2>
                <Button.Group outline={true}>
                    <Button color="info" >
                       <FaEdit/>
                    </Button>
                    <Button color="info">
                        <FaTrashAlt/>
                    </Button>
                </Button.Group>
            </div>
            <Ratings value={5} border/>
        </div>
        <div className="border-teal-500 mb-4 border p-6 rounded">
            <div className="flex justify-between items-start border-b pb-4">
                <h2 className="text-lg hover:underline cursor-pointer">Noteworthy technology acquisitions 2021</h2>
                <Button.Group outline={true}>
                    <Button color="info" >
                       <FaEdit/>
                    </Button>
                    <Button color="info">
                        <FaTrashAlt/>
                    </Button>
                </Button.Group>
            </div>
            <Ratings value={5} border/>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
