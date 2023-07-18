import image from "../../../assets/profile-image.jpg";
// hooks
import { useEffect, useState } from "react";
// firebase functions
import { db } from "../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
// components
import Spinner from "../../common/Spinner";

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

  return (
    <div className="reviews-read">
      <img
        src={image}
        alt=""
      />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor libero, ratione vel consequatur, quam cumque quibusdam velit ipsa eveniet illum aliquid praesentium explicabo rerum voluptatem voluptates, facilis iure quas ipsum fuga modi! Dicta assumenda beatae qui cum quis, obcaecati sint?</p>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
    </div>
  );
}

export default Reviews;
