import styles from "./moviespost.module.css";
export const MoviePost = ({ poster_path, title}) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="320"
      />
      <p className={styles.text}>{title}</p>
    </>
  );
};