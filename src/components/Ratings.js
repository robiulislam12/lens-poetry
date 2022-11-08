import { Avatar, Rating } from "flowbite-react";

const Ratings = ({value, border}) => {
  return (
    <div className={`flex flex-wrap gap-2 py-4 ${!border && 'border-b'}`}>
      <div className="flex justify-between items-center w-full">
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          bordered={true}
        >
          <div className="font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quisquam
        autem maiores voluptatibus, ducimus inventore dolores expedita vitae
        molestias beatae libero quos commodi est ut excepturi repellendus
        officiis quas blanditiis!
      </p>
    </div>
  );
};

export default Ratings;
