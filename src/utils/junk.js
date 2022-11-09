import { Button,TextInput,  Label, Modal, Textarea } from "flowbite-react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Review = ({ review, handleEdit, handleDelete, visible,setVisible }) => {

  console.log(review?.ratings, review?.comment)

  // Update review
  const handleReview = (e) => {
    e.preventDefault();

    const from = e.target;
    const ratings = from.ratings.value;
    const comment = from.comment.value;

    if(review?.ratings === ratings && review?.comment === comment){
      toast.error('No Changes found')
     return setVisible(false)
    }

    fetch(`https://lens-poetry.vercel.app/review/${review._id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ratings,comment})
    })
    .then(res => res.json())
    .then(data => {
      if(data.matchedCount > 0){
        toast.success("Review update Success")
      }
    })


    setVisible(false);
    from.reset()

  };

  return (
    <>
      <div className="border-teal-500 mb-4 border p-6 rounded">
        <div className="flex justify-between items-start border-b pb-4">
          <Link to={`/services/${review?.postDetails?._id}`}>
            <h2 className="text-lg hover:underline cursor-pointer">
              {review?.postDetails?.title}
            </h2>
          </Link>
          <Button.Group outline={true}>
            <Button
              color="info"
              onClick={() => handleEdit(review?.postDetails?._id)}
            >
              <FaEdit />
            </Button>
            <Button color="info" onClick={() => handleDelete(review._id)}>
              <FaTrashAlt />
            </Button>
          </Button.Group>
        </div>
        <Ratings value={review?.ratings} border review={review} />
      </div>
      {/* Modal Open */}
      <Modal show={visible} onClose={() => setVisible(false)}>
        <Modal.Header>Update Your Review</Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4 py-4" onSubmit={handleReview}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="num" value="Update your ratings" />
              </div>
              <TextInput
                id="num"
                type="text"
                name="ratings"
                placeholder="Your ratings for this content"
                required={true}
                maxLength="3"
                defaultValue={review?.ratings}
              />
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Update Your comment" />
              </div>
              <Textarea
                id="comment"
                name="comment"
                placeholder="Update Your comment ..."
                required={true}
                defaultValue={review?.comment}
                rows={4}
              />
            </div>
            <Button type="submit">Update review</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Review;
