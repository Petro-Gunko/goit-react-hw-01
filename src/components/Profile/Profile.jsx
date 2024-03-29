import css from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={avatar} alt={username} />
        <p className={css.boldText}>{username}</p>
        <p className={css.grayText}>@{tag}</p>
        <p className={css.grayText}>{location}</p>
      </div>

      <ul className={css.listStats}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.boldText}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.boldText}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.boldText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
