import React from 'react';
import styles from './hackathon.module.css'; // Assuming you have separate CSS for this component

const HackathonDetails = () => {
  return (
    <div className={styles.detailsContainer}>
      <h1>About the Hackathon</h1>
      <p>
        Join us for an exciting hackathon event! Engage in creative problem-solving with a chance to win big prizes and collaborate with peers. This hackathon is designed to bring together technology enthusiasts to develop innovative solutions that address real-world challenges.
      </p>
    </div>
  );
};

export default HackathonDetails;
