import styles from "./moviespost.module.css";
export const MoviePost = ({ poster_path, title, id}) => {
  return (

    <div>
      <img
        src={
              poster_path === undefined
                ? 'https://klike.net/uploads/posts/2022-09/1662373395_b-1.jpg'
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
        alt={title}
        width="320"
        key={id}
      />
      <p className={styles.text}>{title}</p>
      </div>

  );
};