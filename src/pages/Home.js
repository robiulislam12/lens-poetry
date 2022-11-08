import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import SnapShot from "../components/SnapShot";
import TeamMember from "../components/TeamMember";
import useTitles from "../hooks/useTitles";
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

const Home = () => {
  // set page title
  useTitles("Home");
  return (
    <>
      <HeroSection />
      <Services />
      <SnapShot />
      {/* Meet out team section */}
      <div className="container mx-auto py-12 sm-p-4">
        <h2 className="text-4xl text-center">Meet With Our Team</h2>
        <p className="text-lg text-gray-500 w-3/4 mx-auto text-center mb-4">A team is a group of individuals working together to achieve their goal. As defined by Professor Leigh Thompson of the Kellogg School of Management
        </p>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          <TeamMember img={team1} name="Elon Musk"/>
          <TeamMember img={team2} name="Jhon Doe" position="Designer"/>
          <TeamMember img={team3} name="Jef bezus" position="CTO"/>
          <TeamMember img={team4} name="Mark Zaku" position="CEO"/>
        </div>
      </div>
    </>
  );
};

export default Home;
