import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import { motion } from 'framer-motion'; 

const About: React.FC = () => {
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

      <motion.section id="about" className={styles.about} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.2}}>
        <motion.div className={styles.textSection} initial={{x: "-100vw"}} animate={{x: 0}} transition={{delay: 0.2, type: 'spring', stiffness: 120}}>
          <h2 className={styles.heading}>About Us</h2>
          <p>
            SolarBitTrade is a pioneering force in the evolving landscape of solar energy trading. As a forward-thinking organization, we are made up of a passionate group of technologists, environmental advocates, and energy enthusiasts who see the potential of solar energy as more than just a renewable power source. Our team understands it as a key element in promoting sustainable development and creating a greener future for all. We're driven by the mission to democratize access to solar energy markets, bringing individuals and businesses into an inclusive and rewarding energy trading ecosystem.
          </p>
        </motion.div>
        <div className={styles.bgImageRight}></div>
  
        <motion.div id="story" className={styles.textSection} initial={{x: "100vw"}} animate={{x: 0}} transition={{delay: 0.4, type: 'spring', stiffness: 120}}>
          <h3 className={styles.subHeading}>Our Story</h3>
          <p>
            Our journey began in 2023 with a powerful vision: To revolutionize the way people perceive and utilize solar energy. Our founders, experienced in the realms of renewable energy and technological innovation, recognized the immense untapped potential solar energy offered. However, they also understood the barriers that limited accessibility and profitability for ordinary individuals and smaller-scale solar producers. 
  
            SolarBitTrade was conceived and developed as a comprehensive solution to these challenges. We aimed to create a dynamic, easy-to-use platform that facilitates direct solar energy trading between producers and consumers. 
  
            Over the years, our platform has evolved, incorporating cutting-edge technologies to provide real-time trading data, performance analytics, and a seamless transaction experience. We've managed to connect hundreds of solar energy producers with consumers, creating a vibrant, sustainable marketplace. 
  
            Today, SolarBitTrade stands as a testament to our unyielding dedication and relentless innovation in empowering individuals and businesses to harness the potential of solar energy trading. Our journey continues as we strive to expand our reach, improve our platform, and contribute meaningfully to a sustainable future.
          </p>
        </motion.div>
        <div className={styles.bgImageLeft}></div>

        <div id="team" className={styles.members}>
          <h3 className={styles.subHeading}>Our Team</h3>
          { }
          {[1, 2, 3, 4, 5].map((member, index) => (
            <motion.div key={index} className={styles.member} whileHover={{scale: 1.1, transition: {duration: 0.3}}}>
              <img src="member1.jpg" alt="img" className={styles.memberImage} />
              <h4 className={styles.memberName}>Team Member {member}</h4>
              <p className={styles.memberPosition}>Solar Energy Specialist</p>
            </motion.div>
          ))}
        </div>

        <div id="values" className={styles.values}>
          <h3 className={styles.subHeading}>Our Values</h3>
          <ul>
            <li>Collaborative Success: We believe in achieving success through shared efforts and partnerships.</li>
            <li>Sustainability: Our commitment to a greener future guides everything we do.</li>
            <li>Innovation: We continuously strive to innovate, improving our platform to serve you better.</li>
          </ul>
        </div>

        <div id="testimonials" className={styles.testimonials}>
          <h3 className={styles.subHeading}>What Our Clients Say</h3>
          <div className={styles.testimonial}>
            <p>
              "SolarBitTrade has been instrumental in helping me turn my solar energy into a profitable resource. Their platform is easy to use and highly efficient."
            </p>
            <p>- Happy Client</p>
          </div>
          <div className={styles.testimonial}>
            <p>
              "With SolarBitTrade, I have been able to trade solar energy effortlessly. The platform is user-friendly, and the team is always responsive and helpful."
            </p>
            <p>- Satisfied Client</p>
          </div>
        </div>
      </motion.section>



      <footer className={styles.footer}>
        <p>&copy; 2023 Solarbittrade</p>
      </footer>
    </>
  );
};

export default About;
