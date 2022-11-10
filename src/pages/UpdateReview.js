import { useLoaderData, useNavigate } from "react-router-dom";
import { Button, TextInput, Label, Textarea } from "flowbite-react";
import toast from "react-hot-toast";
import { useState } from "react";

const UpdateReview = () => {

    const { ratings, comment, _id} = useLoaderData();
    const [rate, setRate] = useState(ratings);
    const [message, setMessage] = useState(comment);


  const navigate = useNavigate();

  const handleReview = (e) => {
    e.preventDefault();

    if (rate === ratings && comment === message) {
      navigate("/my-review");
      return toast.error("No Changes found");
    }

    const newReview = {
        ratings: rate,
        comment: message,
    }

    fetch(`https://lens-poetry.vercel.app/review/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
            navigate("/my-review");
          toast.success("Review update Success");
        }
      });

    e.target.reset();
  };

  return (
    <div className="lg:w-1/2 sm:w-full mx-auto sm-p-4 py-12">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl">Update your review</h2>
        <form className="flex flex-col gap-4 py-4" onSubmit={handleReview}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="num" value="Update your ratings" />
            </div>
            <TextInput
              id="num"
              type="text"
              placeholder="Your ratings for this content"
              required={true}
              onChange={(e) => setRate(e.target.value)}
              maxLength="3"
              defaultValue={rate}
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Update Your comment" />
            </div>
            <Textarea
              id="comment"
              placeholder="Update Your comment ..."
              onChange={e => setMessage(e.target.value)}
              required={true}
              defaultValue={message}
              rows={4}
            />
          </div>
          <Button type="submit">Update review</Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
