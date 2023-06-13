// images
import image from "../../../assets/profile-image.jpg";

function YourAccount(props) {
  const { user } = props;
  console.log(user);

  return (
    <>
      <section id="your-account">
        <h1>Your account</h1>
        {user && (
          <section className="your-account-content container">
            <figure>
              {!user.photoUrl ? (
                <img
                  src={image}
                  alt="Profile id"
                />
              ) : (
                <img
                  src={user.photoUrl}
                  alt="Profile id"
                />
              )}
              <span>change</span>
            </figure>
            <div>
              <p>
                user id: <span>{user.uid}</span>
              </p>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div>
              <p>
                username: <span>{user.displayName}</span>
              </p>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div>
              <p>
                email: <span>{user.email}</span>
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
        )}
      </section>
    </>
  );
}

export default YourAccount;
