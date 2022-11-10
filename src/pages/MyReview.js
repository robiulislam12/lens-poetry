import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
import Review from "../components/Review";
import useTitles from "../hooks/useTitles";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://lens-poetry.vercel.app/review?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("lensPoetry-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);

  // handle delete
  const handleDelete = (id) => {
    fetch(`https://lens-poetry.vercel.app/review/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("lensPoetry-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Review deleted successfully");
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
        }
      });
  };

  // set page titles
  useTitles("My all Review");

  return (
    <div className="lg:w-3/4 mx-auto py-12 sm-p-4">
      <div className="bg-white p-4 rounded-lg shadow my-4">
        {/* All Reviews */}
        {reviews.length === 0 ? (
          <h2 className="text-3xl font-semibold mb-4">No reviews were added</h2>
        ) : (
          <h2 className="text-3xl font-semibold mb-4">My All Reviews</h2>
        )}
        <hr />
        {reviews.map((review) => (
          <Review
            key={review._id}
            handleDelete={handleDelete}
            review={review}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReview;
