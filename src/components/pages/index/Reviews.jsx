import image from "../../../assets/profile-image.jpg";

function Reviews() {
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
