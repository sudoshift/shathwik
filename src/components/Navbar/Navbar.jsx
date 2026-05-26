import aboutLogo from "../../assets/Navbar/image.png";
import batteryLogo from "../../assets/Navbar/battery.png";
import wifiLogo from "../../assets/Navbar/wifi.png";
import searchLogo from "../../assets/Navbar/search.png";
import headphonesLogo from "../../assets/Navbar/headphones.png";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { APP_NAME } from "../../constants/app";
import { profile } from "../../data/profile";

function Navbar() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <a href="/" className={styles.navbar__logo} aria-label="Home">
          <img
            src={aboutLogo}
            className={styles["navbar__logo-img"]}
            alt="Shathwik portfolio"
          />
        </a>
        <a
          href="/"
          className={styles.navbar__link}
          style={{ color: "black", fontWeight: "bold" }}
        >
          {APP_NAME}
        </a>
        <a href={`mailto:${profile.email}`} className={styles.navbar__link}>
          Contact
        </a>
        <a
          href={profile.resumeUrl}
          className={styles.navbar__link}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>

      <div className={styles.navbar__right}>
        <div className={styles.navbar__icons} aria-hidden="true">
          <span className={styles.icon}>
            <img src={batteryLogo} className={styles.icon__img} alt="" />
          </span>
          <span className={styles.icon}>
            <img src={wifiLogo} className={styles.icon__img} alt="" />
          </span>
          <span className={styles.icon}>
            <img src={searchLogo} className={styles.icon__img} alt="" />
          </span>
          <span className={styles.icon}>
            <img src={headphonesLogo} className={styles.icon__img} alt="" />
          </span>
        </div>
        <time className={styles.datetime__date} dateTime={dateTime.toISOString()}>
          {formattedDate}
        </time>
        <time className={styles.datetime__time} dateTime={dateTime.toISOString()}>
          {formattedTime}
        </time>
      </div>
    </header>
  );
}

export default Navbar;
