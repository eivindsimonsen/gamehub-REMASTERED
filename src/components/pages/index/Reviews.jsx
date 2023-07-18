import image from "../../../assets/profile-image.jpg";
// hooks
import { useEffect, useState } from "react";
// firebase functions
import { db } from "../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
// components
import Spinner from "./../../common/Spinner";

function Reviews() {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "reviews"), (querySnapshot) => {
      let reviewArr = [];
      querySnapshot.forEach((doc) => {
        reviewArr.push({ ...doc.data(), id: doc.id });
      });
      setReview(reviewArr);
      setIsLoading(false);
    });
    // Clean up function
    return () => unsubscribe();
  }, []);

  console.log(review);

  function renderStars(rating) {
    const totalStars = 5;
    // Number of filled stars (integer part of rating)
    const filledStars = Math.floor(rating);

    // Array to store the JSX elements representing star icons
    const starIcons = [];

    // Add a filled star icon to the array
    for (let i = 0; i < filledStars; i++) {
      starIcons.push(
        <i
          className="fa-solid fa-star"
          key={i}></i>
      );
    }

    // Calculate the number of empty stars
    const emptyStars = totalStars - filledStars;
    for (let i = 0; i < emptyStars; i++) {
      starIcons.push(
        <i
          className="fa-regular fa-star"
          key={filledStars + 1 + i}></i>
      );
    }

    // Return the array of star icons
    return starIcons;
  }

  return (
    <>
      {isLoading && <Spinner />}
      {review.map((reviews, index) => (
        <div className="reviews-read">
          <img
            src={image}
            alt=""
          />
          <div key={index}>
            <p>{reviews.text}</p>
            {renderStars(reviews.rating)}
            {/* <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Reviews;
