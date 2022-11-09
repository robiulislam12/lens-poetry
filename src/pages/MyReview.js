import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import Ratings from "../components/Ratings";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://lens-poetry.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  // handle edit
  const handleEdit = (id) => {
    console.log("edit item", id);
  };
  // handle delete
  const handleDelete = (id) => {

    console.log(id)

    fetch(`https://lens-poetry.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0){
            alert('deleted successfully');
            const remaining = reviews.filter(review => review._id !== id);
            setReviews(remaining);
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto py-12 sm-p-4">
      <div className="bg-white p-4 rounded-lg shadow my-4">
        {/* All Reviews */}
        <h2 className="text-3xl font-semibold mb-4">My All Reviews</h2>
        <hr />
        {reviews.map((review) => (
          <div
            className="border-teal-500 mb-4 border p-6 rounded"
            key={review._d}
          >
            <div className="flex justify-between items-start border-b pb-4">
              <Link to={`/services/${review.postDetails?._id}`}>
                <h2 className="text-lg hover:underline cursor-pointer">
                  {review.postDetails?.title}
                </h2>
              </Link>
              <Button.Group outline={true}>
                <Button
                  color="info"
                  onClick={() => handleEdit(review.postDetails?._id)}
                >
                  <FaEdit />
                </Button>
                <Button
                  color="info"
                  onClick={() => handleDelete(review._id)}
                >
                  <FaTrashAlt />
                </Button>
              </Button.Group>
            </div>
            <Ratings value={review?.ratings} border review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
