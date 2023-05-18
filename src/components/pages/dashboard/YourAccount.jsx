// images
import image from "../../../assets/profile-image.jpg";

function YourAccount() {
  return (
    <>
      <section id="your-account">
        <h1>Your account</h1>
        <section className="your-account-content container">
          <figure>
            <img
              src={image}
              alt="Profile id"
            />
            <span>change</span>
          </figure>
          <div>
            <p>
              user id: <span>ørfljkha590234klhnsefhlksefj</span>
            </p>
            <i className="fa-solid fa-pen"></i>
          </div>
          <div>
            <p>
              username: <span>eivindsimonsen</span>
            </p>
            <i className="fa-solid fa-pen"></i>
          </div>
          <div>
            <p>
              email: <span>eivindsimonsen@gmail.com</span>
            </p>
            <i className="fa-solid fa-pen"></i>
          </div>
          <div>
            <p>
              password: <span className="your-account-content--password">ørfljkha590234klhnsefhlksefj</span>
            </p>
            <i className="fa-solid fa-pen"></i>
          </div>
        </section>
      </section>
    </>
  );
}

export default YourAccount;
