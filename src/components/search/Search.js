import styles from "./Search.module.scss";
const Search = ({}) => {
  return (
    <form className={styles.container}>
      <div className={styles.search}>
        <input className={styles["input-field"]} />
        <label className={styles.label}>Latitude</label>
      </div>
      <div className={styles.search}>
        <input className={styles["input-field"]} />
        <label className={styles.label}>Longitude</label>
      </div>
      <button
        type="submit"
        className={styles["search-btn"]}
        onClick={(e) => e.preventDefault()}
      >
        Search
      </button>
      <button
        className={styles["search-btn"]}
        onClick={(e) => e.preventDefault()}
      >
        Near to you
      </button>
    </form>
  );
};

export default Search;
