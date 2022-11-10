import React, { useContext, useEffect, useState } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  TextInput,
  Label,
  Button,
  Textarea,
} from "flowbite-react";
import useTitles from "../hooks/useTitles";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Ratings from "../components/Ratings";
import toast from "react-hot-toast";

const SingleService = () => {

  // reviews 
  const [reviews, setReviews] = useState([]);

  const { user } = useContext(AuthContext);

  // Single service data
  const {title, _id, description, photoURL} = useLoaderData();

  const userJoiningDate = user?.metadata?.creationTime.split(' ')[2] + " " + user?.metadata?.creationTime.split(' ')[3]

  // handle review
  const handleReview = e => {
    e.preventDefault();

    const from = e.target;
    const ratings = from.ratings.value;
    const comment = from.comment.value;

    // post review
    fetch('https://lens-poetry.vercel.app/review', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("lensPoetry-token")}`
      },
      body: JSON.stringify({
        postDetails: {
          postId: _id,
          title,
        },
        userDetails: {
          userEmail: user?.email,
          userName: user?.displayName,
          userPhoto: user?.photoURL,
          userJoinDate: userJoiningDate
        },
        ratings,
        comment,
        email: user?.email,
        postId: _id,
        time: new Date().toLocaleString()
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success('Review Added Successfully!!')
      }
    })

    // reset from
    from.reset();
  }

  useEffect(() => {
    fetch(`https://lens-poetry.vercel.app/review?postId=${_id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("lensPoetry-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email,setReviews, _id, reviews]);

  // Set page title
  useTitles(title);

  return (
    <div className="lg:w-3/4 mx-auto py-12 sm-p-4">
      <PhotoProvider>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-4xl mb-4">
            {title}
          </h2>
          <PhotoView src={photoURL}>
            <img src={photoURL} alt="" className="rounded" />
          </PhotoView>
          <div className="py-4">
            <p className="text-base">
              {description}
            </p>
          </div>
        </div>
      </PhotoProvider>

      {/* See All reviews */}

      <div className="bg-white p-4 rounded-lg shadow my-4">
        {/* All Reviews */}
        <h2 className="text-3xl font-semibold">All Reviews</h2>

        {
          reviews.map(review => {
            return <Ratings key={review._id} review={review}/>
          })
        }
        
      </div>
      {/* Review section */}
      <div className="bg-white p-4 rounded-lg shadow my-4">
        <h2 className="text-3xl font-semibold">Add your review</h2>
        {user?.uid ? (
          <form className="flex flex-col gap-4 py-4" onSubmit={handleReview}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="num" value="Add your ratings" />
              </div>
              <TextInput
                id="num"
                type="text"
                name="ratings"
                placeholder="Your rattings for this content"
                required={true}
                maxLength="3"
              />
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                name="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>
            <Button type="submit">Add a review</Button>
          </form>
        ) : (
          <>
            <h2 className="text-2xl">You need to login first</h2>
            <Link to="/login">
              <Button type="submit">Login Page</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleService;
