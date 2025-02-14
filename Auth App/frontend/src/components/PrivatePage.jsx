/* eslint-disable no-unused-vars */
import React from "react";
import useAuthStore from "../zustand/useAuthStore";
import { useNavigate } from "react-router-dom";
const PrivatePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const handleLogout = () => {
    const success = logout();

    if (success) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" className="w3-bar-item w3-button">
            <b>BR</b> Architects
          </a>
          {/* Float links to the right. Hide them on small screens */}
          <div className="w3-right w3-hide-small">
            <a href="#projects" className="w3-bar-item w3-button">
              Projects
            </a>
            <a href="#about" className="w3-bar-item w3-button">
              About
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              Contact
            </a>

            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: "1500px" }}
        id="home"
      >
        <img
          className="w3-image"
          src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg"
          alt="Architecture"
          width="1500"
          height="800"
        />
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white">
            <span className="w3-padding w3-black w3-opacity-min">
              <b>BR</b>
            </span>
            <span className="w3-hide-small w3-text-light-grey">Architects</span>
          </h1>
        </div>
      </header>

      {/* Page content */}
      <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
        {/* Project Section */}
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>

        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsV18P-S5ZotxiF7byYUG_ML_PFQdaUP8pg&s"
                alt="House"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img
                src="https://media.istockphoto.com/id/146892954/photo/luxurious-brick-home-in-expensive-neighborhood.jpg?s=612x612&w=0&k=20&c=hMZlB-JwkFuqvBZ3MvcS3OBxXDHKbnQL7DPfPvzu-AE="
                alt="House"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3orGSqwpqNUIItp_B-j7mIN75xXPtuwmsFA&s"
                alt="House"
                style={{ width: "90%" }}
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz52OcANSefgljzrp4wwEcCbvHCoVii-VNQ&s"
                alt="House"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>

        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsV18P-S5ZotxiF7byYUG_ML_PFQdaUP8pg&s"
                alt="House"
                style={{ width: "99%" }}
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img
                src="https://media.istockphoto.com/id/146892954/photo/luxurious-brick-home-in-expensive-neighborhood.jpg?s=612x612&w=0&k=20&c=hMZlB-JwkFuqvBZ3MvcS3OBxXDHKbnQL7DPfPvzu-AE="
                alt="House"
                style={{ width: "99%" }}
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3orGSqwpqNUIItp_B-j7mIN75xXPtuwmsFA&s"
                alt="House"
                style={{ width: "90%" }}
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz52OcANSefgljzrp4wwEcCbvHCoVii-VNQ&s"
                alt="House"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>

        <div className="w3-row-padding w3-grayscale">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <h3>John Doe</h3>
            <p className="w3-opacity">CEO & Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <h3>Jane Doe</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <h3>Mike Ross</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg"
              alt="Dan"
              style={{ width: "100%" }}
            />
            <h3>Dan Star</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w3-container w3-padding-32" id="contact">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Contact
          </h3>
          <p>Let's get in touch and talk about your next project.</p>
          <form action="/action_page.php" target="_blank">
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
            <input
              className="w3-input w3-section w3-border"
              type="email"
              placeholder="Email"
              required
              name="Email"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Subject"
              required
              name="Subject"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Comment"
              required
              name="Comment"
            />
            <button className="w3-button w3-black w3-section" type="submit">
              <i className="fa fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="w3-container w3-padding-32 w3-light-grey w3-center">
          <h5>
            Powered by{" "}
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              title="W3.CSS"
              target="_blank"
              className="w3-hover-opacity"
            >
              W3.CSS
            </a>
          </h5>
        </footer>
      </div>
    </>
  );
};

export default PrivatePage;
