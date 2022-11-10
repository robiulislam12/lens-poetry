import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Review = ({ review, handleDelete }) => {
  return (
    <>
      <div className="border-teal-500 mb-4 border p-6 rounded">
        <div className="flex justify-between items-start border-b pb-4">
          <Link to={`/services/${review?.postDetails?.postId}`}>
            <h2 className="text-lg hover:underline cursor-pointer">
              {review?.postDetails?.title}
            </h2>
          </Link>
          <Button.Group outline={true}>
            <Link to={`/my-review/update/${review._id}`}>
              <Button color="info">
                <FaEdit />
              </Button>
            </Link>
            <Button color="info" onClick={() => handleDelete(review._id)}>
              <FaTrashAlt />
            </Button>
          </Button.Group>
        </div>
        <Ratings value={review?.ratings} border review={review} />
      </div>
    </>
  );
};

export default Review;
