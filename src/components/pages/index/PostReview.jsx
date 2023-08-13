import { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

function PostReview() {
  const { user } = UserAuth();
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // console.log(user);

  // Gives the rating state a value from 0 - 5 based on what star is clicked
  const chooseRating = (value) => {
    setRating(value);
  };

  // Saves the textarea text to state
  const reviewMessage = (e) => {
    setMessage(e.target.value);
  };

  // Posts the review to firestore
  const postReview = async (e) => {
    e.preventDefault();

    if (message === "") {
      setError(true);
      return;
    } else {
      setError(false);
    }

    await addDoc(collection(db, "reviews"), {
      rating: rating,
      text: message,
      createdAt: serverTimestamp(),
      userPhoto: user.photoURL,
    });
  };

  return (
    <>
      {user ? (
        <form className="home-form">
          <textarea
            name="message"
            id=""
            rows="4"
            placeholder="What do you think of this website?"
            onChange={reviewMessage}></textarea>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <label
                className="rating-review"
                key={value}>
                <input
                  type="radio"
                  value={value}
                  name="stars"
                  checked={rating === value}
                  onChange={() => chooseRating(value)}
                />
                <i className={"fa-star " + (rating >= value ? "fa-solid" : "fa-regular")}></i>
              </label>
            ))}
          </div>
          {error && <div>You must fill in a message</div>}
          <button
            onClick={postReview}
            className="cta cta-alt">
            Post
          </button>
        </form>
      ) : (
        <Link
          to="/login"
          className="cta cta-alt">
          Log in to comment..
        </Link>
      )}
    </>
  );
}

export default PostReview;
