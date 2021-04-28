import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Home = (props) => {
  return (
    <div>
      <div className="banner">
        <div className="hero-text">
          <h1>
            Take your tastebuds <br />
            to a galaxy far, <br />
            far away.
          </h1>
          <p>
            Ain't nothing gonna break my stride, <br />
            ain't nothing gonna slow me down, <br />
            oh no, you got to keep on moving.
          </p>
          <Link to="/products" className="main-cta">
            Shop Sweets
          </Link>
        </div>
      </div>
      <div>
        <p className="floating-words">
          gluten-free {'     '} • {'     '}cruelty-free{'     '}•{'     '}made
          with love{'     '}•{'     '}lactose-free{'     '}•{'     '}female
          world domination
        </p>
      </div>
      <div className="how-it-works">
        <div className="hiw-text">
          <h2>How It Works</h2>
          <p>
            Our infinite and delicious variety of sweets can be delivered <br />
            anywhere in in the milky way and beyond!
          </p>
        </div>
        <div className="column">
          <img
            className="home-illustration"
            src={'/images/croissant.png'}
            width="100%"
            alt=""
          />
          <h3>Browse our goodies</h3>
          <p>
            Take your pick from our infinite selection of intergalactic cupcakes
            & sweets.
          </p>
        </div>
        <div className="column">
          <img
            className="home-illustration"
            src={'/images/icecream.png'}
            width="100%"
            alt=""
          />
          <h3>Add goodies to cart</h3>
          <p>
            We make it easy. Choose an arrival date at checkout up to 5000 light
            years in advance!
          </p>
        </div>
        <div className="column">
          <img
            className="home-illustration"
            src={'/images/astronaut.png'}
            width="100%"
            alt=""
          />
          <h3>Take off!</h3>
          <p>
            Every order is express shipped with ice-packs to keep treats safe &
            fresh on their way to your spaceship!
          </p>
        </div>
      </div>
      <div className="home-image-block">
        <img className="image-block" src="/images/milkyway.png" alt="" />
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-column">
          <img
            className="team-photo"
            src={'/images/annie.jpg'}
            width="100%"
            alt=""
          />
          <h3>Annie Moosher</h3>
          <p>Annie is A-MAZING!</p>
          <a
            href="https://www.linkedin.com/in/annette-m-499170100/"
            target="_blank"
          >
            <img className="linkedin-logo" src={'/images/LI-Bug.png'} alt="" />
          </a>
        </div>
        <div className="team-column">
          <img
            className="team-photo"
            src={'/images/charlotte.jpg'}
            width="100%"
            alt=""
          />
          <h3>Charlotte Ulrich</h3>
          <p>Charlotte is CHA-MAZING!</p>
          <a
            href="https://www.linkedin.com/in/charlotteulrich/"
            target="_blank"
          >
            <img className="linkedin-logo" src={'/images/LI-Bug.png'} alt="" />
          </a>
        </div>
        <div className="team-column">
          <img
            className="team-photo"
            src={'/images/chumi.png'}
            width="100%"
            alt=""
          />
          <h3>Chumi Gonzalez</h3>
          <p>Chumi is CHU-MAZING!</p>
          <a
            href="https://www.linkedin.com/in/chumi-gonzalez-a434aa74/"
            target="_blank"
          >
            <img className="linkedin-logo" src={'/images/LI-Bug.png'} alt="" />
          </a>
        </div>
        <div className="team-column">
          <img
            className="team-photo"
            src={'/images/kathy.png'}
            width="100%"
            alt=""
          />
          <h3>Kathy Son</h3>
          <p>Kathy is KA-MAZING!</p>
          <a
            href="https://www.linkedin.com/in/kathy-son-09941a1ab/"
            target="_blank"
          >
            <img className="linkedin-logo" src={'/images/LI-Bug.png'} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);
