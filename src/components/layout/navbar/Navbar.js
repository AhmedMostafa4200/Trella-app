import styles from "./Navbar.module.scss";

const Navbar = ({}) => {
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.header}>Trella</h1>
        <ul>
          <li className={styles["user-first-char"]}>A</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
