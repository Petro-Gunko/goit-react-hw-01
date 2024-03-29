import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const activity = clsx(isOnline ? css.isOnline : css.isOffline);

  return (
    <div className={css.containerItem}>
      <img src={avatar} alt="Avatar" width="80" />
      <p>{name}</p>
      <p className={activity}>{isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}
