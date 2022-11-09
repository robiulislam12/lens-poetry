import { Avatar, Rating } from "flowbite-react";

const Ratings = ({value, border, review}) => {

  const comment = review?.comment;

  const userDetails = review?.userDetails;

  // user image
  const userImg = userDetails?.userPhoto ? userDetails?.userPhoto : "https://flowbite.com/docs/images/people/profile-picture-5.jpg";

  return (
    <div className={`flex flex-wrap gap-2 py-4 ${!border && 'border-b'}`}>
      <div className="flex justify-between items-center w-full">
        <Avatar
          img={userImg}
          rounded={true}
          bordered={true}
        >
          <div className="font-medium dark:text-white">
            <div>{userDetails?.userName}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in {userDetails?.userJoinDate}
            </div>
          </div>
        </Avatar>
        {/* Ratings */}
        <Rating className="border-2 px-3 py-0 rounded-full border-teal-500">
          <p className="mr-2 text-sm font-bold text-gray-900 dark:text-white">
            {value}
          </p>
          <Rating.Star />
        </Rating>
      </div>
      <p className="text-lg text-gray-500 pl-12">
        {comment}
      </p>
    </div>
  );
};

export default Ratings;
