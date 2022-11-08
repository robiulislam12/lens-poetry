import { Button, Progress } from "flowbite-react";
import React from "react";
import SnapImg from "../assets/snap-img.png";

const SnapShot = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 items-center">
        <img src={SnapImg} alt="" />
        <div>
          <h2 className="text-6xl font-regular">
            Build A Moment With One Snap Shoot
          </h2>
          <p className="text-lg text-gray-500 mt-3">
            Wildlife photography is a genre of photography concerned with
            documenting various forms of wildlife in their natural habitat.
          </p>
          <div className="py-8 grid gap-4">
            <Progress
              progress={85}
              label="Animal"
              size="sm"
              color="yellow"
              labelPosition="outside"
              labelProgress={true}
            />
            <Progress
              progress={80}
              label="After Event Videography"
              size="sm"
              color="dark"
              labelPosition="outside"
              labelProgress={true}
            />
            <Progress
              progress={69}
              label="Aesthetic Editing"
              size="sm"
              color="blue"
              labelPosition="outside"
              labelProgress={true}
            />
          </div>
          <Button outline={true} gradientDuoTone="greenToBlue" size="xl">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SnapShot;
