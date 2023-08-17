import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Solution.module.css';
import solutionimage from './solution.jpg';
import feature1 from './feature1.jpg'; 
import feature2 from './feature2.jpg'; 
import feature3 from './feature3.jpg'; 
import feature4 from './feature4.jpg'; 

const Solution: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.companyName}>
          <h1>SolarBitTrade</h1>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/solution">Solution</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles['sign-in']}>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>

      <section id="solution-intro" className={`${styles.section} ${styles.solutionIntro}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.heading}>Our Solution</h2>
          <p>
            SolarBitTrade offers a comprehensive solar energy trading platform that connects producers and consumers
            of solar energy. Our cutting-edge technology enables efficient and sustainable energy exchange, paving
            the way for a greener future.
          </p>
        </div>
      </section>

      <section id="how-it-works" className={`${styles.section} ${styles.howItWorks}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.heading}>How It Works</h2>
          <p>
            Our platform utilizes advanced algorithms to facilitate seamless solar energy transactions. Producers can
            upload their surplus solar energy, and consumers can browse and purchase energy credits based on their
            requirements. Transactions are executed securely and transparently, ensuring a win-win situation for both
            parties.
          </p>
        </div>
      </section>

      <section id="features" className={`${styles.section} ${styles.features}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.heading}>Features</h2>
          <ul className={styles.featureList}>
            <li>
              <img src={feature1} alt="Feature 1" className={styles.featureIcon} />
              <p>Economical and competitive pricing for solar energy trading.</p>
            </li>
            <li>
              <img src={feature2} alt="Feature 2" className={styles.featureIcon} />
              <p>Efficient algorithms to optimize energy exchange and utilization.</p>
            </li>
            <li>
              <img src={feature3} alt="Feature 3" className={styles.featureIcon} />
              <p>Sustainable solution contributing to a greener environment.</p>
            </li>
            <li>
              <img src={feature4} alt="Feature 4" className={styles.featureIcon} />
              <p>Secure and transparent transactions for all users.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="demo" className={`${styles.section} ${styles.demo}`}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.heading}>Platform Demo</h2>
          <p>
            Curious about how our solar energy trading platform works? Watch our demo to get a glimpse of the seamless
            experience we offer. Sign up today to start harnessing the power of the sun efficiently and economically.
          </p>
          <iframe title="Demo Video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="100%" height="500" className={styles.iframe}></iframe>        </div>
      </section>

      <footer>
        <p>&copy; 2023 Solarbittrade</p>
      </footer>
    </>
  );
};

export default Solution;
