import React from "react";
import styles from "../styles/Banner.module.css";
import birthdayImage from "../images/banner.jpg";

const Banner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <img
        src={birthdayImage}
        alt="Birthday Banner"
        className={styles.bannerImage}
      />
      <div className={styles.overlay}>
        <h2 className="text-3xl font-bold text-white mb-4">
          Wishing You a Wonderful Year Ahead! 🎂🥳
        </h2>
        <p className="text-lg text-white">
          May your day be filled with joy and laughter! 🎈🎁
        </p>
      </div>
    </div>
  );
};

export default Banner;
