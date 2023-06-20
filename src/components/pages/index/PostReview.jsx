import { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

function PostReview() {
  const { user } = UserAuth();
  const [rating, setRating] = useState(0);

  console.log(user);

  const chooseRating = (value) => {
    setRating(value);
  };

  return (
    <>
      {user ? (
        <form className="home-form">
          <textarea
            name="message"
            id=""
            rows="4"
            placeholder="What do you think of this website?"></textarea>
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
          <button className="cta cta-alt">Post</button>
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
