import styles from "./Navbar.module.scss";

const Navbar = ({}) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <h1 className={styles.header}>Trella</h1>
        <ul>
          <li className={styles["user-first-char"]}>A</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
